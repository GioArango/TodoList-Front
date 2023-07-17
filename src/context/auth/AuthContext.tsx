
import { AuthState, UserAuthDto, UserAuthenticated } from "@/models";
import { createContext } from "react";

export type AuthContextProps = {
    state: AuthState,
    registerUser: ( data: UserAuthDto ) => Promise<boolean>,
    authUser: ( credentials: UserAuthDto ) => Promise<UserAuthenticated>,
    logOut: () => void
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);