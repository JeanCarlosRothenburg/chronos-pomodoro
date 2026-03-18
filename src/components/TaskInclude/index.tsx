import { PlayCircleIcon } from 'lucide-react'
import { Button } from '../Button'
import { Cycles } from '../Cycles'
import { Input } from '../Input'

import style from './style.module.css'
import { useRef } from 'react'
import type { ModelTask } from '../../models/ModelTask'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes'

export function TaskInclude() {
    const {state, setState} = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null)
    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    function handleSubmitTask(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        
        if (!taskNameInput.current) return

        const taskName = taskNameInput.current.value.trim()

        if (!taskName) {
            alert('Tarefa não informada!')
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

        const secondsRemaining = newTask.duration * 60
        const minutesRemaining = formatSecondsToMinutes(secondsRemaining)

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: minutesRemaining,
                tasks: [...prevState.tasks, newTask]
            }
        })
    }
    return (
        <form onSubmit={handleSubmitTask} className="taskForm" action="POST">
            <div className={style.formRow}>
                <Input id="newTask"
                       labelText="Tarefa"
                       type="text"
                       placeholder="Estudar React"
                       ref={taskNameInput}
                       disabled={Boolean(state.activeTask)}/>
            </div>
            <div className={style.formRow}>
                <span>Lorem ipsum dolor sit amet.</span>
            </div>

            {state.currentCycle !== 0 && (
                <div className={style.formRow}>
                    <Cycles />
                </div>
            )}

            <div className={style.formRow}>
                <Button icon={<PlayCircleIcon />}/>
            </div>
        </form>
    )
}