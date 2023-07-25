import { TodoState } from "@/models";


export const TODO_INITIAL_STATE: TodoState = {
    total: 0,
    todos: [
        {
            _id: '',
            title: '',
            description: '',
            active: true,
            startDate: new Date(),
            endDate: new Date(),
            timeSpend: 0,
            status: 'TODO',
        }
    ]
}