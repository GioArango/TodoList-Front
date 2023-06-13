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
      <Grid container gap={1}>
        <Grid xs={12} md={3.95} sx={{ backgroundColor: '#E6E6E6', width: '100%' }}>
          <Typography variant="h6" color={'#333333'}>Por hacer</Typography>
          <Todo />
        </Grid>

        <Grid xs={12} md={3.95} sx={{ backgroundColor: '#FFCC99', width: '100%' }}>
          <Typography variant="h6" color={'#333333'}>En progreso</Typography>
          <Todo />
        </Grid>

        <Grid xs={12} md={3.95} sx={{ backgroundColor: '#66CC99', width: '100%' }}>
          <Typography variant="h6" color={'#333333'}>Terminado</Typography>
          <Todo />
        </Grid>
      </Grid>
    </>
  )
}

export default Todos