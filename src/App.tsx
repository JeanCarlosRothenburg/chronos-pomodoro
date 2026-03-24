import { Message } from './components/Message'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import { RouterWrapper } from './routers/ReactRouterWrapper'

import './styles/global.css'
import './styles/theme.css'

export function App() {
    return (
        <TaskContextProvider>
            <Message>
                <RouterWrapper />
            </Message>
        </TaskContextProvider>
    ) 
}