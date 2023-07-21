import { List, PlaylistAddCheck, PlaylistPlay } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";

export const BarNavigation = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <BottomNavigation
                showLabels
                sx={{ backgroundColor: '#f2f2f2'}}
                // value={value}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
            >
                <BottomNavigationAction label="TODO" icon={<List />} />
                <BottomNavigationAction label="IN PROGRESS" icon={<PlaylistPlay />} />
                <BottomNavigationAction label="DONE" icon={<PlaylistAddCheck />} />
            </BottomNavigation>
        </Box>
    )
}
