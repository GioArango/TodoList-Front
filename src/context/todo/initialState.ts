import { TodoState } from "@/models";


export const TODO_INITIAL_STATE: TodoState = {
    todoCount: 0,
    todos: [
        {
            id: '',
            title: '',
            description: '',
            active: true,
            startDate: new Date(),
            endDate: new Date(),
            timeSpent: 0,
            status: 'TODO'
        }
    ],
    completed: 0,
    pending: 0
}