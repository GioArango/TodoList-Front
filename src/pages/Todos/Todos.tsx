import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { Todo } from '@/components/shared';

const Todos = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={4} sx={{ backgroundColor: '#0033ad', width: '100%' }}>
        <Typography variant="h6">Por hacer</Typography>
        <Todo />
      </Grid>

      <Grid xs={12} md={4} sx={{ backgroundColor: 'orange', width: '100%'}}>
        <Typography variant="h6">En progreso</Typography>
        <Todo />
      </Grid>

      <Grid xs={12} md={4} sx={{ backgroundColor: 'green', width: '100%'}}>
        <Typography variant="h6">Terminado</Typography>
        <Todo />
      </Grid>
    </Grid>
  )
}

export default Todos