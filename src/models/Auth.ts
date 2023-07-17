

export interface AuthState {
    name: string | null;
    email: string | null;
    token: string | null;
    uid: string | null;
    isAuthenticated: boolean;
    isActive: boolean;
}

export interface UserAuthDto {
    email: string;
    password: string;
}

export interface UserAuthenticated {
    email: string | null;
    uid: string;
    token: string;
    isSuccess?: boolean;
}