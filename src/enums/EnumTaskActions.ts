import type { ModelTask } from "../models/ModelTask"

export const EnumTaskActions = {
    START_TASK: 'START_TASK',
    INTERRUPT_TASK: 'INTERRUPT_TASK'
} as const

export type EnumTaskActions = typeof EnumTaskActions[keyof typeof EnumTaskActions]

export type TaskActionModelWithPayload = {
    type: typeof EnumTaskActions.START_TASK
    payload: ModelTask
}

export type TaskActionModelWithoutPayload = {
    type: typeof EnumTaskActions.INTERRUPT_TASK
}

export type TaskActionModel = TaskActionModelWithPayload | TaskActionModelWithoutPayload