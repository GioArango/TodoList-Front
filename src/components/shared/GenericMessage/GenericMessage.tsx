import { HelperContext } from "@/context/helper/HelperContext";
import { Alert, Snackbar } from "@mui/material";
import { useContext } from "react";

export const GenericMessage = () => {

    const { state, setMessage } = useContext(HelperContext);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        console.log(event);
        if (reason === 'clickaway') {
            return;
        }
        setMessage({ message: undefined, severity: undefined});
    }
    

    return (
        <Snackbar 
            open={(state?.alert?.message) ? true : false} 
            autoHideDuration={4000} 
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right"}}
        >
            <Alert onClose={handleClose} severity={state?.alert?.severity} sx={{ width: '100%' }}>
                {state?.alert?.message}
            </Alert>
        </Snackbar>
    )
}
