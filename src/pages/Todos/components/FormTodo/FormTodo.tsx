import { Box, Button, Unstable_Grid2 as Grid, Paper, TextField, Typography } from "@mui/material/"
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
    handleCreateTodo: (formData: FormData) => void
}

const schema = z.object({
    taskName: z
        .string()
        .min(5, "The task name is required")
        .max(30, "the task name must be a maximum of 30 characters long."),
    taskDescription: z
        .string()
        .min(30, "The task description is required")
        .max(200, "the task name must be a maximum of 200 characters long."),
});

type FormData = z.infer<typeof schema>;

export const FormTodo = ({ handleCreateTodo }: Props) => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            taskName: '',
            taskDescription: ''
        }
    });

    const onSubmitForm = ( formData: FormData ) => {
        handleCreateTodo(formData);
        reset();
    }

    return (
        <Paper elevation={4} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Grid container gap={1} spacing={3} sx={{ width: '100%', my: 2 }}>
                <form onSubmit={handleSubmit(onSubmitForm)} style={{ width: '100%' }}>
                    <Grid sm={12}>
                        <TextField
                            {...register('taskName')}
                            label="Task name" 
                            variant="outlined" 
                            fullWidth 
                            size="small" 
                        />  
                        <Typography>{errors.taskName?.message}</Typography>              
                    </Grid>

                    <Grid>
                        <TextField
                            {...register('taskDescription')}
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={3}
                            fullWidth
                            size="small"
                        />
                        <Typography>{errors.taskDescription?.message}</Typography>      
                    </Grid>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 1, mx: 1.5 }}>
                        <Button variant="contained" type="submit">Create</Button>
                    </Box>
                </form>
            </Grid>
        </Paper>
    )
}
