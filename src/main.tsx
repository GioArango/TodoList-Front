// import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './context/auth/AuthProvider.tsx';
import { TodoProvider } from './context/todo/TodoProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <AuthProvider>
    <TodoProvider>
      <App />
    </TodoProvider>
  </AuthProvider>
  // </React.StrictMode>,
)
