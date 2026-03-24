import type { ModelPomodoroConfig } from "../models/ModelPomodoroConfig"
import type { ModelTask } from "../models/ModelTask"

export const EnumTaskActions = {
    START_TASK: 'START_TASK',
    INTERRUPT_TASK: 'INTERRUPT_TASK',
    COUNT_DOWN: 'COUNT_DOWN',
    COMPLETE_TASK: 'COMPLETE_TASK',
    RESET_STATE: 'RESET_STATE',
    CHANGE_SETTINGS: 'CHANGE_SETTINGS'
} as const

export type EnumTaskActions = typeof EnumTaskActions[keyof typeof EnumTaskActions]

export type TaskActionModelWithPayload = {
    type: typeof EnumTaskActions.START_TASK
    payload: ModelTask
} | {
    type: typeof EnumTaskActions.COUNT_DOWN
    payload: {
        secondsRemaining: number
    }
} | {
    type: typeof EnumTaskActions.CHANGE_SETTINGS
    payload: ModelPomodoroConfig
}

export type TaskActionModelWithoutPayload = {
    type: typeof EnumTaskActions.INTERRUPT_TASK
} | {
    type: typeof EnumTaskActions.COMPLETE_TASK
} | {
    type: typeof EnumTaskActions.RESET_STATE
}

export type TaskActionModel = TaskActionModelWithPayload | TaskActionModelWithoutPayload