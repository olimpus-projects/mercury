import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    isAuthenticated: boolean;
    user: { username: string } | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            user: null,
            login: (username, password) => {
                // In a real app, you would validate credentials against an API
                // This is just a simple example
                if (username && password) {
                    set({ isAuthenticated: true, user: { username } });
                }
            },
            logout: () => {
                set({ isAuthenticated: false, user: null });
            },
        }),
        {
            name: 'auth-storage', // name of the item in localStorage
        }
    )
)