export enum Status { 
    TODO = 'TODO', 
    INPROGRESS = 'INPROGRESS',
    DONE= 'DONE'
};

export interface Todo {
    _id?: string;
    title: string;
    description?: string;
    active: boolean;
    startDate?: Date;
    endDate?: Date;
    timeSpend?: number;
    status: string;
    // userId: string;
}

export interface TodoState {
    todosStatus: Status,
    total: number;
    todos: Todo[]
}


export interface Todos {
    total: number;
    todos: Todo[];
}

export interface NewStatusDto {
    id?: string,
    newStatus: Status
}