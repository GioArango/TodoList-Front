import { HelperContext } from "@/context/helper/HelperContext";
import { NewStatusDto, Status, Todo, Todos } from "@/models";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { useAxiosFetch } from "./useAxiosFetch";

export const useTodos = (status: Status) => {

    const { todosApi } = useAxiosFetch();
    const { showLoader, hideLoader } = useContext(HelperContext);
    const queryClient = useQueryClient();
    
    const getTodos = async (status: Status): Promise<Todos> => {
        showLoader();
        const params = new URLSearchParams();

        if (status) params.append('status', status);
        const { data } = await todosApi?.get('/api/todos', { params });
        hideLoader();
        
        return data;
    }

    const createTodo = async (newTodo: Todo) => {
        try {
            showLoader();
            const { data } = await todosApi?.post('/api/todos', newTodo, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            console.log('RESPONSE CREATE', data);
            return data;            
        } catch (error) {
            console.log(error);
        } finally {
            hideLoader();
        }
    }

    const editTodo = async ( editedTodo: Todo ) => {
        try {
            showLoader();
            const { _id, ...rest } = editedTodo;
            const { data } = await todosApi.put(`/api/todos/${_id}`, rest, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('RESPONSE EDIT', data);
            return data;
        } catch (error) {
            console.log(error);
        } finally {
            hideLoader();
        }
    }

    const updateStatus = async ( dataNewStatus: NewStatusDto ) => {
        try {
            showLoader();
            const { id, newStatus } = dataNewStatus;
            const { data } = await todosApi.put(`/api/todos/${id}`, { status: newStatus }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('RESPONSE UPDATE STATUS', data);
            return {data, newStatus};
        } catch (error) {
            console.log(error);
        } finally {
            hideLoader();
        }
    }

    const deleteTodo = async ( todoId: string ) => {
        try {
            showLoader();

            const { data } = await todosApi.delete(`/api/todos/${todoId}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('RESPONSE DELETE TODO', data);
            return data;
        } catch (error) {
            console.log(error);
        } finally {
            hideLoader();
        }
    }

    const todosQuery = useQuery(
        ['todos', { status }],
        () => getTodos(status), 
        {
            enabled: window.location.pathname !== '/login'
        }
    );

    const createTodoMutation = useMutation(createTodo, {
        onSuccess: () => {
            todosQuery.refetch();
        }
    });

    const editTodoMutation = useMutation(editTodo, {
        onSuccess: () => {
            todosQuery.refetch();
        }
    });

    const updateStatusMutation = useMutation(updateStatus, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos']})
        }
    });

    const deleteTodoMutation = useMutation(deleteTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos']})
        }
    });

    return {
        todosQuery,
        createTodoMutation,
        editTodoMutation,
        updateStatusMutation,
        deleteTodoMutation
    }
}
