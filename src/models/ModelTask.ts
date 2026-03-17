export type ModelTask = {
    id: string
    name: string
    duration: number
    startDate: number
    finishDate: number | null
    interruptDate: number | null
    type: 'focusTime' | 'shortRest' | 'longRest'

}