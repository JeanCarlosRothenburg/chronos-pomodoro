import type { ModelStateTask } from "../models/ModelStateTask";

export const initialTaskState: ModelStateTask = {
    tasks: [],
    activeTask: null,
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    currentCycle: 0,
    pomodoConfig: {
       focusTime: 25,
       shortRest: 5,
       longRest: 15
    }
}