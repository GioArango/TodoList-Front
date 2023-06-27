
import './App.css';
import { AppProvider } from './context/AppProvider';
import { Todos } from './pages';

function App() {

  return (
    <AppProvider>
      <Todos />
    </AppProvider>
  )
}

export default App
