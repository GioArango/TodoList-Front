import { FirebaseAuth } from "@/firebase/config";
import { UserAuthDto } from "@/models";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useReducer } from "react";
import { HelperContext } from "../helper/HelperContext";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { AUTH_INITIAL_STATE } from "./initialState";
import { deletaDataSessionStorage, getDataSessionStorage } from "@/helpers";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({ children }: Props) => {
    const dataSessionStorage = getDataSessionStorage('todo/auth');

    const [state, dispatch] = useReducer(authReducer, dataSessionStorage || AUTH_INITIAL_STATE);
    const { showLoader, hideLoader, setMessage } = useContext(HelperContext);

    const registerUser = async (data: UserAuthDto) => {
        try {
            showLoader();
            const { email, password } = data;
            const { user } = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
            console.log('FIREBASE REGISTER', user);

            const userEmail = user.email;
            dispatch({ type: 'REGISTER', payload: {email: userEmail} });
            setMessage({ message: 'User successfully registered', severity: 'success' });
            return true;
        } catch (error) {
            console.log(error);
            setMessage({ message: 'Error registering user', severity: 'error' });
            return false;
        } finally {
            hideLoader();
        }
    }

    const authUser = async( credentials: UserAuthDto) => {
        try {
            showLoader();
            const { email, password } = credentials;
            const { user } = await signInWithEmailAndPassword(FirebaseAuth, email, password);

            const userAuthenticated = {
                email: user.email,
                token: (await user.getIdToken()),
                uid: user.uid,
                isAuthenticated: true
            }
            
            console.log(userAuthenticated);
            dispatch({ type: 'LOGIN', payload: userAuthenticated });
            
            return {
                isSuccess: true,
                ...userAuthenticated
            };
        } catch (error) {
            console.log(error);
            setMessage({ message: 'Wrong credentials ', severity: 'error' });
            return {
                isSuccess: false,
                email: '',
                token: '',
                uid: ''
            };
        } finally {
            hideLoader();
        }
    }

    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
        deletaDataSessionStorage('todo/auth');
    }

    return (
        <AuthContext.Provider value={{ state, registerUser, authUser, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}
