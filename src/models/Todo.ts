type Status = 'TODO' | 'INPROGRESS' | 'DONE';

export interface Todo {
    id: string;
    title: string;
    description?: string;
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