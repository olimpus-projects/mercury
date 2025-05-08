import { Header } from '@/components/template/Header/Header'
import './Home.css'

function Home() {
    document.title = "Home - Routes App"

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <p>👋 Welcome to Routes App 🫡</p>
        <p>👷‍♂️This is just a placeholder for the future content 🚧</p>
        <p>🛠️ In this page you can receive your users to link to the app or submit reports.</p>
      </div>
    </>
  )
}

export default Home
