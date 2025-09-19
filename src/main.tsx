import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import AppRouter from './routes/Routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={AppRouter} />
    </MantineProvider>
  </StrictMode>
)
