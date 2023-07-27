import { Box, Button, Unstable_Grid2 as Grid, Paper, TextField, Typography } from "@mui/material/"
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Todo } from "@/models";
import { useState } from "react";

interface Props {
    handleCreateTodo: (newTodo: Todo) => void,
    editData: Todo | null,
    handleEditTodo: (editedTodo: Todo) => void
}

const schema = z.object({
    title: z
        .string()
        .min(5, "The task name is required")
        .max(30, "the task name must be a maximum of 30 characters long."),
    description: z
        .string()
        .max(200, "the task name must be a maximum of 200 characters long."),
});

type FormData = z.infer<typeof schema>;

export const FormTodo = ({ handleCreateTodo, editData, handleEditTodo }: Props) => {

    const [titleIsFocused, setTitleIsFocused] = useState(false);
    const [desciptionIsFocused, setDesciptionIsFocused] = useState(false);

    const {
        register,
        reset,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            title: '',
            description: ''
        }
    });

    if ( editData ) {
        setValue('title', editData.title)
        setValue('description', editData?.description!)
    }

    const onSubmitForm = ( formData: FormData ) => {
        if ( editData ) {
            const editedTodo = {
                ...editData,
                title: formData.title,
                description: formData.description,
            }
            reset();
            setValue('title', '')
            setValue('description', '')
            handleEditTodo(editedTodo);
        } else {
            const newTodo = {
                ...formData,
                status: "TODO",
                active: true,
            }
            reset();
            handleCreateTodo(newTodo);
        }
    }

    return (
        <Paper elevation={4} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Grid container gap={1} spacing={3} sx={{ width: '100%', my: 2 }}>
                <form onSubmit={handleSubmit(onSubmitForm)} style={{ width: '100%' }}>
                    <Grid sm={12}>
                        <TextField
                            {...register('title')}
                            label="Task name" 
                            variant="outlined" 
                            fullWidth 
                            size="small"
                            InputLabelProps={{
                                shrink: (editData || titleIsFocused || getValues('title')) ? true : false,
                            }}
                            onFocus={() => setTitleIsFocused(true)}
                            onBlur={() => setTitleIsFocused(false)}
                        />  
                        <Typography>{errors.title?.message}</Typography>              
                    </Grid>

                    <Grid>
                        <TextField
                            {...register('description')}
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={3}
                            fullWidth
                            size="small"
                            InputLabelProps={{
                                shrink: (editData || desciptionIsFocused || getValues('description')) ? true : false,
                            }}
                            onFocus={() => setDesciptionIsFocused(true)}
                            onBlur={() => setDesciptionIsFocused(false)}
                        />
                        <Typography>{errors.description?.message}</Typography>      
                    </Grid>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 1, mx: 1.5 }}>
                        <Button variant="contained" type="submit">{ !editData ? 'Create' : 'Edit' }</Button>
                    </Box>
                </form>
            </Grid>
        </Paper>
    )
}
