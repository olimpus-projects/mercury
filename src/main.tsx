import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './routes/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './routes/Login/Login'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>
)
