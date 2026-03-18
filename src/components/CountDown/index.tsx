import style from './style.module.css'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

export function CountDown() {
    const {state} = useTaskContext()
    return (
        <div className={style.container}>{state.formattedSecondsRemaining}</div>
    )
}