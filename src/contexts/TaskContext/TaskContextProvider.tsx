import { useEffect, useReducer, useRef } from "react"
import { TaskContext } from "./TaskContext"
import { initialTaskState } from "../../states/TaskState"
import { taskReducer } from "./taskReducer"
import { TimeWorkerManager } from "../../workers/TimeWorkerManager"
import { EnumTaskActions } from "../../enums/EnumTaskActions"
import type { ModelStateTask } from "../../models/ModelStateTask"
import { loadBeep } from "../../utils/loadBeep"

type TaskContextProvider = {
    children: React.ReactNode
}

export function TaskContextProvider({children}: TaskContextProvider) {
    const worker = TimeWorkerManager.getInstance()
    const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
        const storageState = localStorage.getItem('state')
        if (storageState === null) return initialTaskState
        const parsedStorageState = JSON.parse(storageState) as ModelStateTask
        return {
            ...parsedStorageState,
            activeTask: null,
            secondsRemaining: 0,
            formattedSecondsRemaining: '00:00'
        }
    })
    const playBeep = useRef<ReturnType<typeof loadBeep>>(null)

    worker.onmessage(e => {
        const countDownSeconds = e.data
        if (countDownSeconds <= 0) {
            if (playBeep.current) {
                playBeep.current()
                playBeep.current = null
            }
            dispatch({
                type: EnumTaskActions.COMPLETE_TASK
            })
            worker.terminate()
        } else {
            dispatch({
                type: EnumTaskActions.COUNT_DOWN,
                payload: {secondsRemaining: countDownSeconds}
            })

        }
    })
    
    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))

        if (state.tasks.length && !state.activeTask) {
            worker.terminate()
            document.title = 'Chronos Pomodoro'
        } else if (state.activeTask){
            worker.postMessage(state)
            document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`
        }
    }, [worker, state])

    useEffect(() => {
        if (state.activeTask && (playBeep.current === null)) {
            playBeep.current = loadBeep()
        } else {
            playBeep.current = null
        }
    }, [state.activeTask])

    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}