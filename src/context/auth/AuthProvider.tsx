import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { AUTH_INITIAL_STATE } from "./initialState";
import { FirebaseAuth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthDto } from "@/models";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE );

    const registerUser = async(data: AuthDto) => {
        try {
            const { email, password } = data;
            const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
            console.log('FIREBASE REGISTER', response);

            const user = {
                email: response.user.email,
                token: response.user.accessToken,
                uid: response.user.uid
            }

            dispatch({ type: 'REGISTER', payload: user });
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ state, registerUser }}>
            {children}
        </AuthContext.Provider>
    )
}
