import { createContext, useContext, useState } from "react";
import type { ModelStateTask } from "../../models/ModelStateTask";
import { initialTaskState } from "../../states/TaskState";

type TaskContextProps = {
    state: ModelStateTask,
    setState: React.Dispatch<React.SetStateAction<ModelStateTask>>
}

const initialContextValue = {
    state: initialTaskState,
    setState: () => {}
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)