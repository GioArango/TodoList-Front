import { useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { AUTH_INITIAL_STATE } from "./initialState";
import { FirebaseAuth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthDto } from "@/models";
import { HelperContext } from "../helper/HelperContext";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE );
    const { showLoader, hideLoader, setMessage } = useContext(HelperContext);

    const registerUser = async(data: AuthDto) => {
        try {
            showLoader();
            const { email, password } = data;
            const { user } = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
            console.log('FIREBASE REGISTER', user);

            const userFirebase = {
                email: user.email,
                token: user.accessToken,
                uid: user.uid
            }

            dispatch({ type: 'REGISTER', payload: userFirebase });
            setMessage({message: 'Error registrando usuario}', severity: 'success'});
        } catch (error) {
            console.log(error);
            setMessage({message: 'Error registrando usuario', severity: 'error'});
        } finally {
            hideLoader();
        }
    }

    return (
        <AuthContext.Provider value={{ state, registerUser }}>
            {children}
        </AuthContext.Provider>
    )
}
