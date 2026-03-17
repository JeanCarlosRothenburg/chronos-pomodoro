import { useContext } from 'react'
import style from './style.module.css'
import { TaskContext } from '../../contexts/TaskContext'

export function CountDown() {
    const ctx = useContext(TaskContext)
    return (
        <div className={style.container}>00:00</div>
    )
}