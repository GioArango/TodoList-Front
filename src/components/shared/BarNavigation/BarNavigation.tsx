import { List, PlaylistAddCheck, PlaylistPlay } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";

export const BarNavigation = () => {
    const [value, setValue] = useState(0);

    console.log(value);

    return (
        <Box sx={{ width: '100%' }}>
            <BottomNavigation
                showLabels
                sx={{ backgroundColor: '#f2f2f2'}}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="TODO" color="red" icon={<List />} />
                <BottomNavigationAction label="IN PROGRESS" icon={<PlaylistPlay />} />
                <BottomNavigationAction label="DONE" icon={<PlaylistAddCheck />} />
            </BottomNavigation>
        </Box>
    )
}
