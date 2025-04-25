import './Login.css'
import { LoginForm } from './LoginForm/LoginForm'

const Login = () => {
    return (
        <>
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