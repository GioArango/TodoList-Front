import { ActionType, TodoState } from "@/models";

export const TodoReducer = (state: TodoState, action: ActionType): TodoState => {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                ...state,
                todos: [...state.todos]
            }

        case 'CREATE_TODO':
            return {
                ...state,
                todos: [...state.todos]
            }

        case 'UPDATE_STATUS':
            return {
                ...state,
                todosStatus: action.payload
            }

        // case ACTION_TYPES.UPDATE_TODO:

        //     return {};

        // case ACTION_TYPES.DELETE_TODOS:

        //     return {};

        default:
            return state;
    }
}
