// type Status = 'TODO' | 'INPROGRESS' | 'DONE';

export interface Todo {
    _id: string;
    title: string;
    description?: string;
    active: boolean;
    startDate?: string;
    endDate?: string;
    timeSpend?: number;
    status: string;
    userId: string;
}

export interface TodoState {
    todoCount: number;
    todos: Todo[],
    completed: number;
    pending: number;
}


export interface Todos {
    total: number;
    todos: Todo[];
}