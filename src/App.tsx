
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AppTheme } from './theme';
import { Loader } from './components/shared/Loader/Loader';
import { GenericMessage } from './components/shared/GenericMessage/GenericMessage';

function App() {

  return (
    <AppTheme>
      <Loader />
      <GenericMessage />
      <RouterProvider router={router} />
    </AppTheme>
  )
}

export default App
