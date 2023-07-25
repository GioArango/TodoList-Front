import { Status, Todo, Todos } from "@/models";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAxiosFetch } from "./useAxiosFetch";
import { useContext } from "react";
import { HelperContext } from "@/context/helper/HelperContext";

export const useTodos = (status: Status) => {

    const { todosApi } = useAxiosFetch();
    const { showLoader, hideLoader } = useContext(HelperContext);

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

    const todosQuery = useQuery(
        ['todos', { status }],
        () => getTodos(status)
    );

    const createTodoMutation = useMutation(createTodo, {
        onSuccess: () => {
            todosQuery.refetch();
        }
    })

    const editTodoMutation = useMutation(editTodo, {
        onSuccess: () => {
            todosQuery.refetch();
        }
    })

    return {
        todosQuery,
        createTodoMutation,
        editTodoMutation
    }
}
