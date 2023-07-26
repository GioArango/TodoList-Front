import { NewStatusDto, Todo, TodoState } from "@/models";
import { createContext } from "react";

export type TodoContextProps = {
    state: TodoState
    createTodo: ( data: Todo ) => void
    updateTodo: ( data: Todo ) => void
    updateStatus: ( data: NewStatusDto ) => void
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);