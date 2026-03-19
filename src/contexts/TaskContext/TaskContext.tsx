import { createContext } from "react";
import type { ModelStateTask } from "../../models/ModelStateTask";
import { initialTaskState } from "../../states/TaskState";
import type { TaskActionModel } from "../../enums/EnumTaskActions";

type TaskContextProps = {
    state: ModelStateTask,
    dispatch: React.Dispatch<TaskActionModel>
}

const initialContextValue = {
    state: initialTaskState,
    dispatch: () => {}
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)