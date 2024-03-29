import { PATHS } from "@/constants/Paths";
import { AuthContext } from "@/context/auth/AuthContext";
import { saveDataInSessionStorage } from "@/helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Unstable_Grid2 as Grid, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
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

export const Login = () => {

    const {authUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmitForm = async(formData: FormData) => {
        console.log(formData);
        const { isSuccess, ...rest } = await authUser(formData);

        console.log('LOGIN', rest);

        if ( !isSuccess ) {
            return;
        }
        saveDataInSessionStorage('todo/auth', rest);
        navigate(PATHS.TODO);
    }

    return (
        <>
            <Typography variant="h5">Autenticación de usuarios</Typography>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <Grid container >
                    <Grid xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            // type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            {...register("email")}
                        />
                        {
                            errors?.email?.message &&
                            <Alert severity='error' sx={{ my: '5px' }}>
                                {errors?.email?.message}
                            </Alert>
                        }
                        {/* <Typography variant="caption" color={mainTheme.palette.error.main}></Typography> */}
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
                        {/* <Typography variant="caption" color={mainTheme.palette.error.main}>{errors?.password?.message}</Typography> */}
                    </Grid>

                    <Grid container spacing={2} sm={12} sx={{ mb: 2, mt: 1 }}>
                        <Grid xs={12} sm={12}>
                            <Button
                                // disabled={isAuthenticating}
                                variant='contained'
                                fullWidth
                                type="submit"
                            >
                                Login
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid

                        xs={12}
                    // display={ !!errorMessage ? '' : 'none'}            
                    >
                    <Grid container direction='row' justifyContent='end'>
                        <Link color='inherit' to={PATHS.REGISTER}>
                            Crear una cuenta
                        </Link>
                    </Grid>
                    </Grid>


                </Grid>
            </form>
        </>
    )
}
