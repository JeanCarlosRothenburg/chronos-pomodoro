import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"

export function CycleExplain() {
    const {state} = useTaskContext()
    const nextCycle = getNextCycle(state.currentCycle)
    const tipsForActiveTask = {
        focusTime:
            <span><b>Foque</b> por <b>{state.pomodoConfig.focusTime} minutos</b></span>,
        shortRest:
            <span><b>Descanse</b> por <b>{state.pomodoConfig.shortRest} minutos</b></span>,
        longRest:
            <span><b>Descanse</b> por <b>{state.pomodoConfig.longRest} minutos</b></span>
    }
    const tipsForNoActiveTask = {
        focusTime:
            <span>No próximo ciclo você deve <b>focar</b> por <b>{state.pomodoConfig.focusTime} minutos</b></span>,
        shortRest:
            <span>No próximo ciclo você deve <b>descansar</b> por <b>{state.pomodoConfig.shortRest} minutos</b></span>,
        longRest:
            <span>No próximo ciclo você deve <b>descansar</b> por <b>{state.pomodoConfig.longRest} minutos</b></span>
    }

    return (
        <>
            {state.activeTask && tipsForActiveTask[getNextCycleType(state.currentCycle)]}
            {!state.activeTask && tipsForNoActiveTask[getNextCycleType(nextCycle)]}
        </>
    )
}