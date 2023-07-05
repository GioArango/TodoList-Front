import { TodoState } from "@/models";
import { createContext } from "react";

export type TodoContextProps = {
    state: TodoState
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);