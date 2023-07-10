import { useReducer } from "react";
import { HelperContext } from "./HelperContext";
import { helperReducer } from "./HelperReducer";
import { INITIAL_STATE_HELPER } from "./initialState";
import { Alert } from "@/models";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const HelperProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer( helperReducer, INITIAL_STATE_HELPER );

    const showLoader = () => {
        dispatch({ type: 'SHOW_LOADER' });
    }

    const hideLoader = () => {
        dispatch({ type: 'HIDE_LOADER'} );
    }

    const setMessage = ( alert: Alert ) => {
        dispatch({ type: 'SET_MESSAGE', payload: alert })
    }

    return (
        <HelperContext.Provider value={{state, showLoader, hideLoader, setMessage}}>
            {children}
        </HelperContext.Provider>
    )
}
