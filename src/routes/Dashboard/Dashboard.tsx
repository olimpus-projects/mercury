import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/states/Auth.state'
import { useNavigate } from 'react-router'

const Dashboard = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      {user && <p className="text-muted-foreground">Signed in as {user.username}</p>}
      <Button className="cursor-pointer" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  )
}

export default Dashboard


