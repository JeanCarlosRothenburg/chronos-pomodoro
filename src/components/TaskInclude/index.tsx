import { PlayCircleIcon } from 'lucide-react'
import { Button } from '../Button'
import { Cycles } from '../Cycles'
import { Input } from '../Input'

import style from './style.module.css'

export function TaskInclude() {
    return (
        <form className="taskForm" action="POST">
            <div className={style.formRow}>
                <Input id="newTask"
                       labelText="Tarefa"
                       type="text"
                       placeholder="Estudar React"/>
            </div>
            <div className={style.formRow}>
                <span>Lorem ipsum dolor sit amet.</span>
            </div>
            <div className={style.formRow}>
                <Cycles />
            </div>
            <div className={style.formRow}>
                <Button icon={<PlayCircleIcon />}/>
            </div>
        </form>
    )
}