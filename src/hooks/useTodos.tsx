import { Todos } from "@/models"
import { useAxiosFetch } from "./useAxiosFetch"
import { useQuery } from "@tanstack/react-query";


export const useTodos = () => {

    const { todosApi } = useAxiosFetch();

    const getTodos = async (): Promise<Todos> => {
        const { data } = await todosApi?.get('/api/todos');
        console.log('DATA', data);
        return data
    }

    const todosQuery = useQuery(
        ['todos'],
        getTodos
    )

    return {
        todosQuery
    }
}
