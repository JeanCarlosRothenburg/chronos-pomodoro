import { EnumTaskActions, type TaskActionModel } from "../../enums/EnumTaskActions";
import type { ModelStateTask } from "../../models/ModelStateTask";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";

export function taskReducer(
    state: ModelStateTask,
    action: TaskActionModel
): ModelStateTask {
    switch (action.type) {
        case EnumTaskActions.START_TASK:
            const newTask = action.payload
            const secondsRemaining = newTask.duration * 60

            return {
                ...state,
                activeTask: newTask,
                currentCycle: getNextCycle(state.currentCycle),
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...state.tasks, newTask]

            }
        case EnumTaskActions.INTERRUPT_TASK:
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00',
                tasks: state.tasks.map(task => {
                    if (state.activeTask.id && (state.activeTask.id === task.id)) {
                        return {...task, interruptDate: Date.now()}
                    }
                    return task
                })
            }
        default:
            return state
    }
}