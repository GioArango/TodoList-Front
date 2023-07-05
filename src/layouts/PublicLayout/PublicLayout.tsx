import { Unstable_Grid2 as Grid, Paper } from "@mui/material/";
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <Paper elevation={3}>
        <Grid            
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
            >

                <Grid
                    className="box-shadow"
                    xs={3}
                    sx={{ width: {md:450}, backgroundColor: 'white', padding: 3, borderRadius: 2 }}
                >
                    <Outlet />
                </Grid>
            </Grid>
    </Paper>
  )
}
