import { fetchZeus } from "@/infrastructure/Fetch"

const AuthService = {
    login: async (email: string, password: string) => {
        const fetchedResponse = await fetchZeus('/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        })
        return fetchedResponse
    },
    healthCheck: async () => {
        const fetchedResponse = await fetchZeus('/health', {
            method: 'GET'
        })
        return fetchedResponse.json()
    }
}

export default AuthService