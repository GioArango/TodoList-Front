import { PATHS } from "@/constants/Paths";
import { PublicLayout } from "@/layouts";
import { Login } from "@/pages";
import { RouteObject } from "react-router-dom";

export const LoginRoute: RouteObject = {
    element: <PublicLayout />,
    children: [
        {
            path: PATHS.LOGIN,
            element: <Login />
        }
    ]
}