import { BarNavigation, HeaderBar } from '@/components/shared';
import { useTodos } from '@/hooks/useTodos';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { FormTodo, SearchTodo, Todo } from './components';

const Todos = () => {

  const { todosQuery } = useTodos();

  const handleCreateTodo = (data: {}) => {
    console.log('FORM', data);
  }

  return (
    <>
      <HeaderBar />
      <Box sx={{ m: 3 }}>
        <Grid container xs={12} sx={{ mb: 2 }}>
          <SearchTodo />
        </Grid>
        <Grid container gap={2}>
          <Grid xs={12} md={5.92} sx={{ backgroundColor: '#E6E6E6', height: '100%' }}>
            <BarNavigation />
            <Grid container direction="column">
              {
                todosQuery.isFetching
                && <Typography>Loading...</Typography> // TODO: Hacer preloader con placeholders                 
              }
              {
                todosQuery?.data?.total < 1
                ? (<Typography variant='subtitle2'>Aún no tienes tareas creadas</Typography>) // TODO: Hacer preloader con placeholders
                :
                todosQuery.data?.todos?.map( todo => (
                  <Todo
                    key={todo._id} 
                    todo={todo}
                  />
                ))
              }
            </Grid>
          </Grid>
          <Grid container xs={12} md={5.92} sx={{ display: 'flex', justifyContent: 'center' }}>
            <FormTodo handleCreateTodo={handleCreateTodo} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Todos