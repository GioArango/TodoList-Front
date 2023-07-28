import { AuthContext } from "@/context/auth/AuthContext";
import { HelperContext } from "@/context/helper/HelperContext";
import axios from "axios";
import { useContext } from "react";

export const useAxiosFetch = () => {

    const { state, logOut } = useContext(AuthContext);
    const { hideLoader } = useContext(HelperContext);
    const { token } = state;

    const todosApi = axios.create({
        baseURL: import.meta.env.VITE_APP_API_URL,
        headers: {
            'x-token' : token
        }
    })

    todosApi.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if ( error.response && error.response.status === 401 ) {
                window.alert('Session expired');
                hideLoader();
                logOut();
            }

            hideLoader();

            return Promise.reject(error);
        }
    )

    return {
        todosApi
    }
}
