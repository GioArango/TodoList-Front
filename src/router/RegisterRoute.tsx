import { PATHS } from "@/constants/Paths";
import { PublicLayout } from "@/layouts";
import { Register } from "@/pages";
import { RouteObject } from "react-router-dom";

export const RegisterRoute: RouteObject = {
    element: <PublicLayout />,
    children: [
        {
            path: PATHS.REGISTER,
            element: <Register />
        }
    ]
}