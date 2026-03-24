import type { ModelTask } from "../models/ModelTask";

export function getTaskStatus(
    task: ModelTask,
    activeTask: ModelTask | null
) {
    if (task.finishDate) return 'Completa'
    if (task.interruptDate) return 'Interrompida'
    if (activeTask?.id === task.id) return 'Em andamento'
    return 'Abandonada'
}