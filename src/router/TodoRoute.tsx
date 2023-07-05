import { PATHS } from "@/constants/Paths";
import { Todos } from "@/pages";
import { RouteObject } from "react-router-dom";

export const TodoRoute: RouteObject = {
    children: [
        {
            path: PATHS.TODO,
            element: <Todos />
        }
    ]
}