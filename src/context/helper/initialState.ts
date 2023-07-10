import { HelperState } from "@/models";

export const INITIAL_STATE_HELPER: HelperState = {
    showLoader: false,
    alert: {
        message: '',
        severity: undefined
    }
}