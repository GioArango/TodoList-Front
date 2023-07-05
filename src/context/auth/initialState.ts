import { AuthState } from "@/models/Auth";

export const AUTH_INITIAL_STATE: AuthState = {
    name: '',
    email: '',
    token: '',
    uid: '',
    isAuthenticated: false
}