import { HelperState, HelperType } from "@/models";

export const helperReducer = (state: HelperState, action: HelperType): HelperState => {
    switch (action.type) {
        case "SHOW_LOADER":
            return {
                ...state,
                showLoader: true
            }

        case "HIDE_LOADER":
            return {
                ...state,
                showLoader: false
            }

        case "SET_MESSAGE":
            return {
                ...state,
                alert: action.payload
            }

        default:
            return state;
    }
}