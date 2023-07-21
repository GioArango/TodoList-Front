// import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './context/auth/AuthProvider.tsx';
import { HelperProvider } from './context/helper/HelperProvider.tsx';
import { TodoProvider } from './context/todo/TodoProvider.tsx';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={ client }>
    <ReactQueryDevtools />
    <HelperProvider>
      <AuthProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </AuthProvider>
    </HelperProvider>
  </QueryClientProvider>
  // </React.StrictMode>,
)
