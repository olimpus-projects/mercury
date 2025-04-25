import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './routes/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './routes/Login/Login'
import { ProtectedRoute } from './routes/Protected/ProtectedRoute'
import { useAuthStore } from './states/Auth.state'
import { Button } from './components/ui/button'

const Dashboard = () => {
  const { logout } = useAuthStore();
  return (
    <div>
      <h1>Protected Route</h1>
      <Button className='cursor-pointer' onClick={logout}>
        Logout
      </Button>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
