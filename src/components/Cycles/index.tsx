import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { EnumCycle } from '../../enums/EnumCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import style from './style.module.css'

export function Cycles() {
    const {state} = useTaskContext()
    const cycles = Array.from({ length: state.currentCycle }, (_, index) => index + 1)
    return (
        <div className={style.cycles}>
            <span>Ciclos:</span>
            <div className={style.cycleDots}>
                {
                    cycles.map((value, index) => {
                        const cycleType = getNextCycleType(value)
                        const cycleDescription = EnumCycle[cycleType]
                        return (
                            <span
                                className={`${style.cycleDot} ${style[cycleType]}`}
                                key={index}
                                title={cycleDescription}
                                aria-label={cycleDescription}
                            ></span>)
                    })
                }
            </div>
        </div>
    )
}