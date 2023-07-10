import { AlertColor } from "@mui/material";

export interface Alert {
    message: string;
    severity: AlertColor | undefined;
}

export interface HelperState {
    showLoader: boolean;
    alert: Alert
}
