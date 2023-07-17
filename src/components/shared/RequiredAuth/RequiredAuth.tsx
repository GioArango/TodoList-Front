import { PATHS } from "@/constants/Paths";
import { AuthContext } from "@/context/auth/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const RequiredAuth = () => {

    const { state: auth } = useContext(AuthContext);
    const location = useLocation();

    console.log('VALIDATE AUTH', auth.isAuthenticated);

    if (!auth.isAuthenticated) {
        return <Navigate to={PATHS.INDEX} state={{ from: location }} replace />
    }

    return <Outlet />
}
