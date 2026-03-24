import { PauseCircleIcon, PlayCircleIcon } from 'lucide-react'
import { Button } from '../Button'
import { Cycles } from '../Cycles'
import { Input } from '../Input'

import style from './style.module.css'
import { useRef } from 'react'
import type { ModelTask } from '../../models/ModelTask'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { EnumTaskActions } from '../../enums/EnumTaskActions'
import { CycleExplain } from '../CycleExplain'
import { ToastifyAdapter } from '../../adapters/ToastifyAdapter'

export function TaskInclude() {
    const {state, dispatch} = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null)
    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)
    const lastTaskName = state.tasks[state.tasks.length - 1]?.name || ''

    function handleSubmitTask(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        
        if (!taskNameInput.current) return

        const taskName = taskNameInput.current.value.trim()

        if (!taskName) {
            ToastifyAdapter.warning('Tarefa não informada!')
            return
        }

        const newTask: ModelTask = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            finishDate: null,
            interruptDate: null,
            duration: state.pomodoConfig[nextCycleType],
            type: nextCycleType
        }

        dispatch({type: EnumTaskActions.START_TASK, payload: newTask})
        ToastifyAdapter.sucess("Tarefa iniciada!")
    }

    function handleInterruptTask() {
        dispatch({type: EnumTaskActions.INTERRUPT_TASK})
        ToastifyAdapter.info("Tarefa interrompida!")
    }

    return (
        <form onSubmit={handleSubmitTask} className="taskForm" action="POST">
            <div className={style.formRow}>
                <Input id="newTask"
                       labelText="Tarefa"
                       type="text"
                       placeholder="Estudar React"
                       ref={taskNameInput}
                       disabled={Boolean(state.activeTask)}
                       defaultValue={lastTaskName}/>
            </div>
            
            <div className={style.formRow}>
                <CycleExplain />
            </div>

            {state.currentCycle !== 0 && (
                <div className={style.formRow}>
                    <Cycles />
                </div>
            )}

            <div className={style.formRow}>
                {!state.activeTask ? (
                    <Button
                        type="submit"
                        key="newTaskButton"
                        icon={<PlayCircleIcon />}
                        aria-label="Iniciar nova tarefa"
                        title="Iniciar nova tarefa"/>
                    ) : (
                    <Button
                        type="button"
                        key="interruptTaskButton"
                        icon={<PauseCircleIcon />}
                        onClick={handleInterruptTask}
                        color="red"
                        aria-label="Interromper tarefa"
                        title="Interromper tarefa"/>
                )}
            </div>
        </form>
    )
}