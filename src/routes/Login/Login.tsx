import './Login.css'
import { LoginForm } from './LoginForm/LoginForm'
import { Header } from '@/components/template/Header/Header'
const Login = () => {
    document.title = "Login - Routes App"

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default Login