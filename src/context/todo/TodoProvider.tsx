import { useReducer } from 'react';
import { TodoContext } from './TodoContext';
import { TodoReducer } from './TodoReducer';
import { TODO_INITIAL_STATE } from './initialState';



interface Props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer( TodoReducer, TODO_INITIAL_STATE );

    return (
        <TodoContext.Provider value={{ state }}>
            {children}
        </TodoContext.Provider>
    )
}
