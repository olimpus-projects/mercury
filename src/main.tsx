import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './routes/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './routes/Login/Login'
import { ProtectedRoute } from './routes/Protected/ProtectedRoute'
import Dashboard from './routes/Dashboard/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
