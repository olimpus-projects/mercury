import { create } from 'zustand'
import { useAuthStore } from '../../../states/Auth.state'
interface LoginState {
    email: string
    password: string
    isLoading: boolean
    error: string | null
    setEmail: (email: string) => void
    setPassword: (password: string) => void
    setError: (error: string | null) => void
    login: () => Promise<void>
    reset: () => void
}

export const useLoginStore = create<LoginState>((set, get) => ({
    email: '',
    password: '',
    isLoading: false,
    error: null,

    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setError: (error) => set({ error }),

    login: async () => {
        const { email, password } = get()

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!email || !emailRegex.test(email)) {
            set({ error: 'Please enter a valid email address' })
            return
        }

        if (!password) {
            set({ error: 'Password is required' })
            return
        }

        try {
            set({ isLoading: true, error: null })

            // TODO: Replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 1000))

            // Simulate authentication check
            if (email === 'admin@example.com' && password === 'password') {
                // Authentication successful
                // Use the auth store to set authentication state
                const { login: authLogin } = useAuthStore.getState()
                authLogin(email, password)
                // Reset the login form
                get().reset()
                console.log('Login successful')
                // Here you would typically store auth token or user data
            } else {
                set({ error: 'Invalid email or password' })
            }
        } catch (error) {
            set({ error: 'An error occurred during login' })
            console.error(error)
        } finally {
            set({ isLoading: false })
        }
    },

    reset: () => set({ email: '', password: '', error: null })
}))
