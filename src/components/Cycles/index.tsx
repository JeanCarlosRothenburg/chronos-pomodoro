import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { EnumCycle } from '../../enums/EnumCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { CycleDot } from '../CycleDot'
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
                        return (
                            <CycleDot
                                key={index}
                                cycleType={cycleType}
                                cycleDescription={EnumCycle[cycleType]}
                            ></CycleDot>)
                    })
                }
            </div>
        </div>
    )
}