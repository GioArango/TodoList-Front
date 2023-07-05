type Status = 'TODO' | 'INPROGRESS' | 'DONE';

export interface Todo {
    id: string;
    title: string;
    description?: string;
    active: boolean;
    startDate?: Date;
    endDate?: Date;
    timeSpent?: number;
    status: Status;
}

export interface TodoState {
    todoCount: number;
    todos: Todo[],
    completed: number;
    pending: number;
}