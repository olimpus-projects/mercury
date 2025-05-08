import { useAuthStore } from '../states/Auth.state';

async function fetchZeus(endpoint: string, options: RequestInit) {
    const baseUrl = import.meta.env.VITE_ZEUS_API_URL || null;
    if (!baseUrl) {
        throw new Error('ZEUS_API_URL is not set');
    }
    const url = `${baseUrl}${endpoint}`;
    const response = await fetch(url, options);
    return response;
}

async function fetchZeusSecure(endpoint: string, options: RequestInit) {
    const baseUrl = import.meta.env.VITE_ZEUS_API_URL || null;
    const { user } = useAuthStore.getState();
    const token = user?.token;
    if (!baseUrl) {
        throw new Error('ZEUS_API_URL is not set');
    }
    if (!token) {
        throw new Error('User is not authenticated');
    }
    const url = `${baseUrl}${endpoint}`;
    const response = await fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`
        }
    });
    return response;
}

export { fetchZeus, fetchZeusSecure };