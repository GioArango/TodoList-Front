import { TodoState } from "@/models";
import { createContext } from "react";

export type TodoContextProps = {
    state: TodoState
}

export const AppContext = createContext<TodoContextProps>({} as TodoContextProps);