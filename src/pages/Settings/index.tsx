import { SaveIcon } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Input } from "../../components/Input";
import { Main } from "../../templates/Main/Main";

import style from './style.module.css'
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { validateNumberLimit } from "../../utils/validateNumberLimit";
import { validateNumber } from "../../utils/validateNumber";
import { EnumTaskActions } from "../../enums/EnumTaskActions";
import { ToastifyAdapter } from "../../adapters/ToastifyAdapter";

export function Settings() {
    const {state, dispatch} = useTaskContext()
    const focusTimeInput = useRef<HTMLInputElement>(null)
    const shortRestInput = useRef<HTMLInputElement>(null)
    const longRestInput = useRef<HTMLInputElement>(null)

    function handleSaveSettings(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        const focusTime = Number(focusTimeInput.current?.value) 
        const shortRest = Number(shortRestInput.current?.value)
        const longRest = Number(longRestInput.current?.value)

        if (!validateNumber(focusTime, 'Informe um tempo de foco válido!')) return
        if (!validateNumberLimit(focusTime, {initial: 1, final: 99}, 'tempo de foco')) return
        
        if (!validateNumber(shortRest, 'Informe um tempo de descanço curto válido!')) return
        if (!validateNumberLimit(shortRest, {initial: 1, final: 30}, 'tempo de descanço curto')) return

        if (!validateNumber(longRest, 'Informe um tempo de descanço longo válido!')) return
        if (!validateNumberLimit(longRest, {initial: 1, final: 60}, 'tempo de descanço longo')) return

        dispatch({
            type: EnumTaskActions.CHANGE_SETTINGS,
            payload: {
                focusTime,
                shortRest,
                longRest
            }
        })

        ToastifyAdapter.sucess('Configurações salvas com sucesso!')
    }

    return (
        <Main>
            <Container>
                <h1>Configurações</h1>
            </Container>
            <Container>
                <p>Modifique as configurações dos ciclos de Pomodoro</p>
            </Container>
            <Container>
                <form onSubmit={handleSaveSettings}action="" className="form">
                    <div className={`formRow ${style.short}`}>
                        <Input 
                            type="number"
                            id="focusTime"
                            labelText="Foco"
                            ref={focusTimeInput}
                            defaultValue={state.pomodoConfig.focusTime}
                            min={1}
                            max={99}
                        />
                    </div>
                    <div className={`formRow ${style.short}`}>
                        <Input
                            type="number"
                            id="shortRest"
                            labelText="Descanço curto"
                            ref={shortRestInput}
                            defaultValue={state.pomodoConfig.shortRest}
                            min={1}
                        />
                    </div>
                    <div className={`formRow ${style.short}`}>
                        <Input
                            type="number"
                            id="longRest"
                            labelText="Descanço longo"
                            ref={longRestInput}
                            defaultValue={state.pomodoConfig.longRest}
                            min={1}
                        />
                    </div>
                    <div className="formRow">
                        <Button
                            icon={<SaveIcon />}
                            aria-label="Salvar configuraçõs dos ciclos de Pomodoro"
                            title="Salvar configurações"/>
                    </div>
                </form>
            </Container>
        </Main>
    )
}