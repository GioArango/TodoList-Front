import { TodoContext } from '@/context/todo/TodoContext';
import { Delete, Done, Edit, PlayArrow } from '@mui/icons-material';
import { Card, CardContent, Unstable_Grid2 as Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { useContext } from 'react';

export const Todo = () => {
    const { state } = useContext(TodoContext);
    console.log('STATE: ', state);

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', mx: 4, my: 2 }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    Estudiar inglés
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Typography>
            </CardContent>
            {/* <Box sx={{ display: 'flex', alignSelf: 'end', p: 1 }}> */}
                <Grid container sx={{ display: 'flex', alignSelf: 'end', p: 1 }}>
                    <Grid xs={3} sm={3} sx={{ px: 0.5 }}>
                        <Tooltip title="Start" placement="top">
                            <IconButton color='warning' sx={{ border: 1 }}><PlayArrow /></IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid xs={3} sm={3} sx={{ px: 0.5 }}>
                        <Tooltip title="Done" placement="top">
                            <IconButton color='success' sx={{ border: 1 }}><Done /></IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid xs={3} sm={3} sx={{ px: 0.5 }}>
                        <Tooltip title="Edit" placement="top">
                            <IconButton color='primary' sx={{ border: 1 }}><Edit /></IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid xs={3} sm={3} sx={{ px: 0.5 }}>
                        <Tooltip title="Delete" placement="top">
                            <IconButton color='error' sx={{ border: 1 }}><Delete /></IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            {/* </Box> */}
        </Card>
    )
}
