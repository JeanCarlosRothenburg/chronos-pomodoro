import { useReducer } from "react"
import { TaskContext } from "./TaskContext"
import { initialTaskState } from "../../states/TaskState"
import { taskReducer } from "./taskReducer"

type TaskContextProvider = {
    children: React.ReactNode
}

export function TaskContextProvider({children}: TaskContextProvider) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState)

    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}