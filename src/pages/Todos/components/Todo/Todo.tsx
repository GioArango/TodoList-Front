import { ConvertMinutesInHours, formatSeconds } from '@/helpers';
import { Todo as ITodo, NewStatusDto, Status } from '@/models';
import { Clear, Delete, Done, Edit, Pause, PlayArrow } from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Unstable_Grid2 as Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { differenceInMinutes, differenceInSeconds } from 'date-fns';
import { useEffect, useState } from 'react';

interface Props {
    todo: ITodo
    status: Status
    setDataTodo: (data: ITodo) => void
    updateStatusTodo: (data: NewStatusDto) => void
    handleDeleteTodo: (todoId: string) => void
}

export const Todo = ({ todo, status, setDataTodo, updateStatusTodo, handleDeleteTodo }: Props) => {

    const [timeSpendTodo, setTimeSpendTodo] = useState('');
    const [currentTime, setCurrentTime] = useState(0);

    const editTodo = (data: ITodo) => {
        setDataTodo(data);
    }

    const updateStatus = (newStatus: NewStatusDto) => {
        console.log('OE', newStatus);
        updateStatusTodo(newStatus)
    }

    const deleteTodo = (todoId: string) => {
        handleDeleteTodo(todoId)
    }

    const calculateTimeSpend = () => {

        const endDate = todo?.endDate;
        const creationDate = todo?.startDate;

        const date1 = new Date(endDate!);
        const date2 = new Date(creationDate!);

        const diffInMinutes = differenceInMinutes(date1, date2);

        if (diffInMinutes >= 60) {
            const hours = `${ConvertMinutesInHours(diffInMinutes)} hrs`;
            setTimeSpendTodo(hours);
        } else {
            const minutes = `${diffInMinutes} mins`
            setTimeSpendTodo(minutes);
        }

    }

    // const calculateCurrentTime = () => {

    // }

    useEffect(() => {
        if (status === Status.DONE) {
            calculateTimeSpend();
        }
    }, [])

    useEffect(() => {
        if (status === Status.INPROGRESS) {
            const currentDate = new Date();
            const startDateTodo = todo.startDate;

            const date1 = new Date(currentDate);
            const date2 = new Date(startDateTodo!);

            let currentTimeInSeconds = differenceInSeconds(date1, date2);

            const interval = setInterval(() => {
                currentTimeInSeconds++
                setCurrentTime(currentTimeInSeconds);
            }, 1000);

            return () => clearInterval(interval);

        }
    }, [currentTime]);



    // DONE: calcular diferencia de hora finalizacion y hora inicio para asignarlo al timeSpend solo con estado TODO
    // DONE: en estado in progress calcular los segundos de ejecución de la tarea -> fecha actual - fecha inicio

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
                                label={todo.status}
                                size="small"
                                variant='outlined'
                                color='info'
                                sx={{ fontSize: 9 }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end', mx: 0.3, my: 1 }}>
                            <Typography variant="caption" color="text.secondary" component="div">
                                {status === Status.DONE ? `Time spend: ${timeSpendTodo}` : status === Status.INPROGRESS && `Current time: ${formatSeconds(currentTime)}`}
                            </Typography>
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
                            <IconButton
                                color='warning'
                                disabled={status === Status.DONE}
                                sx={{ border: 1 }}
                                onClick={() => updateStatus({ id: todo._id, newStatus: status !== Status.DONE ? Status.INPROGRESS : Status.DONE, dateStatus: new Date() })}
                            >
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
                            onClick={() => updateStatus({ id: todo._id, newStatus: (status !== Status.TODO && status !== Status.INPROGRESS) ? Status.TODO : Status.DONE, dateStatus: new Date() })}
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
                        <span>
                            <IconButton
                                color='primary'
                                sx={{ border: 1 }}
                                onClick={() => editTodo(todo)}
                                disabled={status === Status.DONE}
                            >
                                <Edit />
                            </IconButton>
                        </span>
                    </Tooltip>
                </Grid>
                <Grid xs={3} sm={3} sx={{ px: 0.5 }}>
                    <Tooltip title="Delete" placement="top">
                        <IconButton
                            color='error'
                            sx={{ border: 1 }}
                            onClick={() => deleteTodo(todo._id!)}
                        >
                            <Delete />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </Card>
    )
}
