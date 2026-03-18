import type { ModelPomodoroConfig } from "./ModelPomodoroConfig"
import type { ModelTask } from "./ModelTask"

export type ModelStateTask = {
    tasks: ModelTask[]
    secondsRemaining: number
    formattedSecondsRemaining: string
    activeTask: ModelTask | null
    currentCycle: number
    pomodoConfig: ModelPomodoroConfig
}