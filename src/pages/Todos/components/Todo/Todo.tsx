import { Todo as ITodo, NewStatusDto, Status } from '@/models';
import { Clear, Delete, Done, Edit, Pause, PlayArrow } from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Unstable_Grid2 as Grid, IconButton, Tooltip, Typography } from '@mui/material';

interface Props {
    todo: ITodo
    status: Status
    setDataTodo: ( data: ITodo ) => void
    updateStatusTodo: ( data: NewStatusDto ) => void
}

export const Todo = ({ todo, status, setDataTodo, updateStatusTodo }: Props) => {

    const editTodo = ( data: ITodo ) => {
        console.log(data);
        setDataTodo(data);
    }

    const updateStatus = ( newStatus: NewStatusDto ) => {
        console.log(newStatus);
        updateStatusTodo(newStatus)
    }

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', mx: 4, my: 0.5 }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Grid container>
                    <Grid xs={6} sm={6}>
                        <Typography component="div" variant="h5">
                            {todo.title}
                        </Typography>
                    </Grid>

                    <Grid xs={6} sm={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Chip 
                                label={ todo.status } 
                                size="small"
                                variant='outlined'
                                color='info'
                                sx={{ fontSize: 9 }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {todo.description}
                </Typography>
            </CardContent>
            <Grid container sx={{ display: 'flex', alignSelf: 'end', p: 1 }}>
                <Grid xs={3} sm={3} sx={{ px: 0.5 }}>
                    <Tooltip title={status === Status.INPROGRESS ? 'Pause' : 'Start'} placement="top">
                        <span>
                            <IconButton color='warning' disabled={status === Status.DONE} sx={{ border: 1 }}>
                                {
                                    status !== Status.INPROGRESS
                                    ? <PlayArrow />
                                    : <Pause />
                                }
                            </IconButton>
                        </span>
                    </Tooltip>
                </Grid>
                <Grid xs={3} sm={3} sx={{ px: 0.5 }}>
                    <Tooltip title={status !== Status.DONE ? "Done" : "Undone"} placement="top">
                        <IconButton 
                            color={status !== Status.DONE ? "success" : "error"} 
                            sx={{ border: 1 }}
                            onClick={() => updateStatus({id: todo._id, newStatus: status !== Status.TODO ? Status.TODO : Status.DONE})}
                        >
                            {
                                status !== Status.DONE
                                ? <Done />
                                : <Clear />
                            }                            
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid xs={3} sm={3} sx={{ px: 0.5 }}>
                    <Tooltip title="Edit" placement="top">
                        <IconButton color='primary' sx={{ border: 1 }} onClick={() => editTodo(todo)}>
                            <Edit />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid xs={3} sm={3} sx={{ px: 0.5 }}>
                    <Tooltip title="Delete" placement="top">
                        <IconButton color='error' sx={{ border: 1 }}>
                            <Delete />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </Card>
    )
}
