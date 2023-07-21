import { BarNavigation, HeaderBar } from '@/components/shared';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { FormTodo, SearchTodo, Todo } from './components';

const Todos = () => {

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
          <Grid xs={12} md={5.92} sx={{ backgroundColor: '#E6E6E6', height: '100vh' }}>
            <BarNavigation />
            <Grid container direction="column">
              <Todo />
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