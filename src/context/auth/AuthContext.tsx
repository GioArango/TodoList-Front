
import { AuthDto, AuthState } from "@/models";
import { createContext } from "react";

export type AuthContextProps = {
    state: AuthState,
    registerUser: ( data: AuthDto ) => void
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);