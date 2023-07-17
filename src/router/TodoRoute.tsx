import { RequiredAuth } from "@/components/shared/RequiredAuth/RequiredAuth";
import { PATHS } from "@/constants/Paths";
import { Todos } from "@/pages";
import { RouteObject } from "react-router-dom";

export const TodoRoute: RouteObject = {
    element: <RequiredAuth />,
    children: [
        {
            path: PATHS.TODO,
            element: <Todos />
        }
    ]
}