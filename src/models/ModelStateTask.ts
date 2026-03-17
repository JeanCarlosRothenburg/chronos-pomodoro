import type { ModelTask } from "./ModelTask"

export type ModelStateTask = {
    tasks: ModelTask[]
    secondsRemaining: number
    activeTask: ModelTask | null
}