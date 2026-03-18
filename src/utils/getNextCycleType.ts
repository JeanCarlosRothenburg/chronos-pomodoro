import type { ModelTask } from "../models/ModelTask"

export function getNextCycleType(currentCycle: number): ModelTask['type'] {
    if (currentCycle === 8) return 'longRest'
    if (currentCycle % 2) return 'focusTime'
    return 'shortRest' 
}