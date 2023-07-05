import { AuthType, AuthState } from "@/models";

export const authReducer = ( state: AuthState, action: AuthType ): AuthState => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                email: action.payload.email,
                isAuthenticated: true,
                token: action.payload.token,
                uid: action.payload.uid
            }
        
        case "REGISTER":
            return {
                ...state,
                email: action.payload.email,
                isAuthenticated: true,
                token: action.payload.token,
                uid: action.payload.uid
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