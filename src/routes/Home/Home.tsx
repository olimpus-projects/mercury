import { Button } from '@/components/ui/button'
import './Home.css'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useAuthStore } from '@/states/Auth.state'

function Home() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Mercury CMS</h1>
      <Button className="cursor-pointer" onClick={() => {
        navigate('/login')
      }}>Sign in</Button>
    </div>
  )
}

export default Home
