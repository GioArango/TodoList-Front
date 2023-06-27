import { AppContext } from '@/context/AppContext';
import { Delete, Done, Edit, PlayArrow } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { useContext } from 'react';

export const Todo = () => {
    const {state} = useContext(AppContext);
    console.log('STATE: ', state);
    
    return (
        <Box sx={{ m: 1, boxShadow: 2 }}>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Estudiar inglés
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                        <Grid container>
                            <Grid xs={12} sm={3} sx={{ px: 0.5 }}>
                                <Button fullWidth variant='contained' color='warning' startIcon={<PlayArrow />}>Start</Button>
                            </Grid>
                            <Grid xs={12} sm={3} sx={{ px: 0.5 }}>
                                <Button fullWidth variant='contained' color='success' startIcon={<Done />}>Done</Button>
                            </Grid>
                            <Grid xs={12} sm={3} sx={{ px: 0.5 }}>
                                <Button fullWidth variant='contained' color='primary' startIcon={<Edit />}>Edit</Button>
                            </Grid>
                            <Grid xs={12} sm={3} sx={{ px: 0.5 }}>
                                <Button fullWidth variant='contained' color='error' startIcon={<Delete />}>Delete</Button>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Card>
        </Box>
    )
}
