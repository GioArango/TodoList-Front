import { HelperContext } from "@/context/helper/HelperContext"
import { Backdrop } from "@mui/material"
import styles from './Loader.module.css'
import { useContext } from "react";

export const Loader = () => {
    
    const { state } = useContext(HelperContext);

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={state.showLoader}
        >
            <span className={styles.loader}></span>
        </Backdrop>
    )
}
