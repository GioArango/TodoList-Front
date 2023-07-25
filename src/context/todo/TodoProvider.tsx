import { useTodos } from '@/hooks/useTodos';
import { Status, Todo } from '@/models';
import { useReducer } from 'react';
import { TodoContext } from './TodoContext';
import { TodoReducer } from './TodoReducer';
import { TODO_INITIAL_STATE } from './initialState';



interface Props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer( TodoReducer, TODO_INITIAL_STATE );
    const { createTodoMutation, editTodoMutation } = useTodos(Status.TODO);

    const createTodo = ( data: Todo ) => {
        try {
            createTodoMutation.mutate(data);
            dispatch({ type: 'CREATE_TODO', payload: data})
          } catch (error) {
            console.log(error);
          }
    }

    const updateTodo = ( dataEditable: Todo ) => {
        try {
            editTodoMutation.mutate(dataEditable)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TodoContext.Provider value={{ state, createTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    )
}
