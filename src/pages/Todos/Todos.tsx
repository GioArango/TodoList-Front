import { BarNavigation, HeaderBar, TodoCardSkeleton } from '@/components/shared';
import { TodoContext } from '@/context/todo/TodoContext';
import { useTodos } from '@/hooks/useTodos';
import { Status, Todo as ITodo, NewStatusDto } from '@/models';
import { Box, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { FormTodo, SearchTodo, Todo } from './components';

const Todos = () => {

  const [status, setStatus] = useState<Status>(Status.TODO);
  const [editData, setEditData] = useState<ITodo | null>(null);
  const { todosQuery } = useTodos(status);
  const { createTodo, updateTodo, updateStatus } = useContext(TodoContext);

  const selectStatus = ( statusSelected: Status ) => {
    setStatus(statusSelected);
  }

  const handleCreateTodo = ( data: ITodo ) => {
    createTodo(data);
    // selectStatus(Status.TODO);
  }

  const setEditInformation = (data: ITodo) => {
    setEditData(data);
  }

  const handleEditTodo = ( data: ITodo ) => {
    updateTodo(data);
    setEditData(null);
  }

  const updateStatusTodo = ( data: NewStatusDto ) => {
    updateStatus(data)
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
            <BarNavigation selectStatus={selectStatus} />
            <Grid container direction="column">
              {
                todosQuery.isLoading
                && <>
                  <TodoCardSkeleton />
                  <TodoCardSkeleton />
                  <TodoCardSkeleton />
                </>
              }
              {
                todosQuery?.data && todosQuery?.data?.total < 1
                ? (<Typography variant='subtitle2' sx={{ p: 2 }}>Sin resultados</Typography>)
                :
                todosQuery.data?.todos?.map( todo => (
                  <Todo
                    key={todo._id} 
                    todo={todo}
                    status={status}
                    setDataTodo={setEditInformation}
                    updateStatusTodo={updateStatusTodo}
                  />
                ))
              }
            </Grid>
          </Grid>
          <Grid container xs={12} md={5.92} sx={{ display: 'flex', justifyContent: 'center' }}>
            <FormTodo 
              handleCreateTodo={handleCreateTodo}
              editData={editData}
              handleEditTodo={handleEditTodo}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Todos