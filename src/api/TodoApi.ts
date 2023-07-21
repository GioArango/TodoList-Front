import { AuthContext } from "@/context/auth/AuthContext";
import axios from "axios";
import { useContext } from "react";

export const TodoApi = () => {

    const { state } = useContext(AuthContext);
    const { token } = state;

    const todosApi = axios.create({
        baseURL: import.meta.env.VITE_APP_API_URL,
        headers: {
            Authorization: `x-token ${token}`
        }
    })

    return {
        todosApi
    }
}
