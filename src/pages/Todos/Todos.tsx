import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { FormTodo, SearchTodo, Todo } from './components';

const Todos = () => {
  
  const handleCreateTodo = ( data: {} ) => {
    console.log('FORM', data);
  }

  return (
    <>
      <Typography variant='h2'>TODO APP</Typography>
      <Grid container xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <FormTodo handleCreateTodo={ handleCreateTodo } />
      </Grid>
      <Grid container xs={12} sx={{ mb: 2 }}>
        <SearchTodo />
      </Grid>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Grid container direction="column" sx={{ backgroundColor: '#E6E6E6', width: '100%' }}>
            <Grid>
              <Typography variant="h6" color="#333333">Por hacer</Typography>
            </Grid>
            <Grid>
              <Todo />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={4}>
          <Grid container direction="column" sx={{ backgroundColor: '#FFCC99', width: '100%' }}>
            <Grid>
              <Typography variant="h6" color="#333333">En progreso</Typography>
            </Grid>
            <Grid>
              <Todo />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={4}>
          <Grid container direction="column" sx={{ backgroundColor: '#66CC99', width: '100%' }}>
            <Grid>
              <Typography variant="h6" color="#333333">Terminado</Typography>
            </Grid>
            <Grid>
              <Todo />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Todos