import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    isAuthenticated: boolean;
    user: any | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            user: null,
            login: (username, password) => {
                if (username && password) {
                    set({ isAuthenticated: true, user: { username } });
                }
            },
            logout: () => {
                set({ isAuthenticated: false, user: null });
            },
        }),
        {
            name: 'auth-storage',
        }
    )
)