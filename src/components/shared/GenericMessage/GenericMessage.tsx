import { HelperContext } from "@/context/helper/HelperContext"
import { Alert, Snackbar } from "@mui/material"
import { useContext, useState } from "react";

export const GenericMessage = () => {

    const { state } = useContext(HelperContext);
    const [openAlert, setOpenAlert] = useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    }

    return (
        <Snackbar open={(state?.alert?.message || openAlert) ? true : false} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={state?.alert?.severity} sx={{ width: '100%' }}>
                {state?.alert.message}
            </Alert>
        </Snackbar>
    )
}
