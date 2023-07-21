import { AuthContext } from "@/context/auth/AuthContext";
import axios from "axios";
import { useContext } from "react";

export const useAxiosFetch = () => {

    const { state } = useContext(AuthContext);
    const { token } = state;

    const todosApi = axios.create({
        baseURL: import.meta.env.VITE_APP_API_URL,
        headers: {
            'x-token' : token
        }
    })

    return {
        todosApi
    }
}
