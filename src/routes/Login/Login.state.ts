import { create } from 'zustand'

interface LoginState {
    username: string
    password: string
    isLoading: boolean
    error: string | null
    setUsername: (username: string) => void
    setPassword: (password: string) => void
    setError: (error: string | null) => void
    login: () => Promise<void>
    reset: () => void
}

export const useLoginStore = create<LoginState>((set, get) => ({
    username: '',
    password: '',
    isLoading: false,
    error: null,

    setUsername: (username) => set({ username }),
    setPassword: (password) => set({ password }),
    setError: (error) => set({ error }),

    login: async () => {
        const { username, password } = get()

        if (!username || !password) {
            set({ error: 'Username and password are required' })
            return
        }

        try {
            set({ isLoading: true, error: null })

            // TODO: Replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 1000))

            // Simulate authentication check
            if (username === 'admin' && password === 'password') {
                // Authentication successful
                console.log('Login successful')
                // Here you would typically store auth token or user data
            } else {
                set({ error: 'Invalid username or password' })
            }
        } catch (error) {
            set({ error: 'An error occurred during login' })
            console.error(error)
        } finally {
            set({ isLoading: false })
        }
    },

    reset: () => set({ username: '', password: '', error: null })
}))
