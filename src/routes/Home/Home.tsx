import { Button } from '@/components/ui/button'
import './Home.css'
import { useNavigate } from 'react-router'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Welcome to Routes App</h1>
      <Button className="cursor-pointer" onClick={() => {
        navigate('/login')
      }}>Log in</Button>
    </div>
  )
}

export default Home
