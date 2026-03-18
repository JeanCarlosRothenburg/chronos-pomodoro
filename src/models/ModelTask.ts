import type { ModelPomodoroConfig } from "./ModelPomodoroConfig"

export type ModelTask = {
    id: string
    name: string
    duration: number
    startDate: number
    finishDate: number | null
    interruptDate: number | null
    type: keyof ModelPomodoroConfig

}