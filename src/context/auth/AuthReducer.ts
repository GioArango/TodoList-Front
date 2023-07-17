import { AuthType, AuthState } from "@/models";

export const authReducer = ( state: AuthState, action: AuthType ): AuthState => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                email: action.payload.email,
                uid: action.payload.uid,
                token: action.payload.token,
                isAuthenticated: true,
            }
        
        case "REGISTER":
            return {
                ...state,
                email: action.payload.email,
            }

        case "LOGOUT":
            return {
                ...state,
                name: null,
                email: null,
                isAuthenticated: false,
                token: null,
                uid: null
            }

        default:
            return state;
    }
}