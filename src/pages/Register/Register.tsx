import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField, Typography, Unstable_Grid2 as Grid, Alert } from "@mui/material"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { z } from "zod"

const schema = z.object({
    name: z
        .string({ required_error: 'The name is required' })
        .min(3, 'The name is required')
        .max(20, 'The name allowed maximum 20 characters'),
    email: z
        .string({
            required_error: 'The email is required',
        })
        .min(5, 'The email is not valid')
        .max(100, 'Please enter maximun 100 characters')
        .email('The email is not valid'),
    password: z
        .string({ required_error: 'The password is required' })
        .min(8, 'The password allowed minimun 8 characters')
        .max(32, 'The password allowed maximun 32 characters'),
})

type FormData = z.infer<typeof schema>;

export const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmitForm = (data: FormData) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <Grid container >
                <Grid xs={12} sx={{ mt: 2 }}>
                    <TextField
                        label="Nombre completo"
                        type="text"
                        placeholder="Tu nombre"
                        fullWidth
                        {...register("name")}
                    />
                    {
                        errors?.name?.message &&
                        <Alert severity='error' sx={{ my: '5px' }}>
                            {errors?.name?.message}
                        </Alert>
                    }
                </Grid>

                <Grid xs={12} sx={{ mt: 2 }}>
                    <TextField
                        label="Correo"
                        type="email"
                        placeholder="email@email.com"
                        fullWidth
                        {...register("email")}
                    />
                    {
                        errors?.email?.message &&
                        <Alert severity='error' sx={{ my: '5px' }}>
                            {errors?.email?.message}
                        </Alert>
                    }
                </Grid>

                <Grid xs={12} sx={{ mt: 2 }}>
                    <TextField
                        label="Contraseña"
                        type="password"
                        placeholder="Contraseña"
                        fullWidth
                        {...register("password")}
                    />
                    {
                        errors?.password?.message &&
                        <Alert severity='error' sx={{ my: '5px' }}>
                            {errors?.password?.message}
                        </Alert>
                    }
                </Grid>

                <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                    <Grid

                        xs={12}
                    // display={ !!errorMessage ? '' : 'none'}
                    >
                        <Alert severity='error'>
                            {/* { errorMessage } */}
                        </Alert>
                    </Grid>
                    <Grid xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            // disabled={ isCheckingAuthentication } 
                            variant='contained'
                            fullWidth
                            type="submit"
                        >
                            Crear cuenta
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                    <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                    {/* <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link> */}
                </Grid>

            </Grid>
        </form>
    )
}
