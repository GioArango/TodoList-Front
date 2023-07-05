import { PATHS } from "@/constants/Paths";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { LoginRoute } from "./LoginRoute";
import { TodoRoute } from "./TodoRoute";
import { RegisterRoute } from "./RegisterRoute";

export const router = createBrowserRouter([
    {
        index: true,
        element: <Navigate to={PATHS.LOGIN} />
    },
    LoginRoute,
    RegisterRoute,
    TodoRoute
])