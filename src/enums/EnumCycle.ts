export const EnumCycle = {
    focusTime: 'Ciclo de foco',
    shortRest: 'Descanço curto',
    longRest: 'Descanço longo'
} as const

export type EnumCycle = typeof EnumCycle[keyof typeof EnumCycle]