import { Home } from './pages/Home'
import { useState } from 'react'
import type { ModelStateTask } from './models/ModelStateTask'
import type { ModelPomodoroConfig } from './models/ModelPomodoroConfig'

import './styles/global.css'
import './styles/theme.css'
import { TaskContext } from './contexts/TaskContext'


export function App() {
    return (
        <TaskContext.Provider value={{key: 'value'}}>
            <Home />
        </TaskContext.Provider>
    ) 
}