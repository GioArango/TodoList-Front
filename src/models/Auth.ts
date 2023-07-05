

export interface AuthState {
    name: string | null;
    email: string | null;
    token: string | null;
    uid: string | null;
    isAuthenticated: boolean;
}

export interface AuthDto {
    email: string;
    password: string;
    token?: string;
    uid?: string;
    isAuthenticated?: boolean;
}