import { ChevronDownIcon, ChevronUpIcon, TrashIcon } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Main } from "../../templates/Main/Main";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { CycleDot } from "../../components/CycleDot";
import { EnumCycle } from "../../enums/EnumCycle";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTask";
import { useEffect, useState } from "react";

import style from './style.module.css'
import { EnumTaskActions } from "../../enums/EnumTaskActions";
import { ToastifyAdapter } from "../../adapters/ToastifyAdapter";

export function History() {
    const {state, dispatch} = useTaskContext()
    const [sortTaskOptions, setSortTaskOption] = useState<SortTasksOptions>(() => {
        return {
            tasks: sortTasks({tasks: state.tasks}),
            field: 'startDate',
            direction: 'desc'
        }
    })
    const hasTask = Boolean(state.tasks.length)

    useEffect(() => {
        setSortTaskOption(prevState => ({
            ...prevState,
            tasks: sortTasks({
                tasks: state.tasks,
                direction: prevState.direction,
                field: prevState.field
            }),
        }))
    }, [state.tasks])

    function handleSortTasks({field}: Pick<SortTasksOptions, 'field'>) {
        const newDirection = sortTaskOptions.direction === 'desc' ? 'asc' : 'desc'
        
        setSortTaskOption({
            tasks: sortTasks({
                direction: newDirection,
                tasks: sortTaskOptions.tasks,
                field
            }),
            direction: newDirection,
            field
        })
    }

    function handleDeleteHistory() {
        ToastifyAdapter.confirm(
            'Tem certeza que deseja exlcuir o histórico de tarefas?',
            response => {
                if (response) dispatch({type: EnumTaskActions.RESET_STATE})
            }
        )
    }

    function renderSortIcon({field}: Pick<SortTasksOptions, 'field'>) {
        if (sortTaskOptions.field !== field) return null

        return sortTaskOptions.direction === 'asc'
            ? <ChevronUpIcon />
            : <ChevronDownIcon />
    }
    return (
        <Main>
            <Container>
                <div className={style.historyHeader}>
                    <h1>History</h1>
                    <span className={style.buttonContainer}>
                        <Button
                            icon={<TrashIcon />}
                            color='red'
                            aria-label="Excluir histórico"
                            title="Excluir histórico"
                            onClick={handleDeleteHistory}/>
                    </span>
                </div>
            </Container>
            <Container>
                {hasTask && (
                    <div className={style.responsiveTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th onClick={() => handleSortTasks({field: 'name'})}>
                                        <div className={style.tableHeader}>
                                            Tarefa
                                            {renderSortIcon({field: 'name'})}
                                        </div>
                                    </th>
                                    <th onClick={() => handleSortTasks({field: 'duration'})}>
                                        <div className={style.tableHeader}>
                                            Duração
                                            {renderSortIcon({field: 'duration'})}
                                        </div>
                                    </th>
                                    <th onClick={() => handleSortTasks({field: 'startDate'})}>
                                        <div className={style.tableHeader}>
                                            Data
                                            {renderSortIcon({field: 'startDate'})}
                                        </div>
                                    </th>
                                    <th>Status</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortTaskOptions.tasks.map(task => {
                                    return (
                                        <tr key={task.id}>
                                            <td>{task.name}</td>
                                            <td>{task.duration} min</td>
                                            <td>{formatDate(task.startDate)}</td>
                                            <td>{getTaskStatus(task, state.activeTask)}</td>
                                            <td>
                                                <CycleDot
                                                    key={task.id}
                                                    cycleType={task.type}
                                                    cycleDescription={EnumCycle[task.type]}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
                {!hasTask && (
                    <h2 className={style.withoutTaskMessage}>Ainda não existem tarefas</h2>
                )}
            </Container>
        </Main>
    )
}