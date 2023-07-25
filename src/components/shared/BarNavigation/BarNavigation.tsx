import { Status } from "@/models";
import { List, PlaylistAddCheck, PlaylistPlay } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";

interface Props {
    selectStatus: (status: Status) => void
}

export const BarNavigation = ({ selectStatus }: Props) => {
    const [value, setValue] = useState(Status.TODO);

    const setStatus = ( status: Status ) => {
        setValue(status);
        selectStatus(status)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <BottomNavigation
                showLabels
                sx={{ backgroundColor: '#f2f2f2'}}
                value={value}
                onChange={(event, newValue) => {
                    setStatus(newValue);
                }}
            >
                <BottomNavigationAction label="TODO" value="TODO" color="red" icon={<List />} />
                <BottomNavigationAction label="IN PROGRESS" value="INPROGRESS" icon={<PlaylistPlay />} />
                <BottomNavigationAction label="DONE" value="DONE" icon={<PlaylistAddCheck />} />
            </BottomNavigation>
        </Box>
    )
}
