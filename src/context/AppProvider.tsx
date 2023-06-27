import { TodoState } from '@/models';
import { AppContext } from './AppContext';
import { useReducer } from 'react';
import { AppReducer } from './AppReducer';

const INITIAL_STATE: TodoState = {
    todoCount: 0,
    todos: [
        {
            id: '',
            name: '',
            description: '',
            completed: false,
            initialDate: new Date(),
            endDate: new Date(),
            timeSpent: 0,
            status: 'TODO'
        }
    ],
    completed: 0,
    pending: 0
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const AppProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer( AppReducer, INITIAL_STATE );

    return (
        <AppContext.Provider value={{ state }}>
            {children}
        </AppContext.Provider>
    )
}
