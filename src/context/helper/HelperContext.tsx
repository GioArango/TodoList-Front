

import { Alert, HelperState } from "@/models";
import { createContext } from "react";

export type HelperContextProps = {
    state: HelperState,
    showLoader: () => void,
    hideLoader: () => void,
    setMessage: ( alert: Alert ) => void
}

export const HelperContext = createContext<HelperContextProps>({} as HelperContextProps);