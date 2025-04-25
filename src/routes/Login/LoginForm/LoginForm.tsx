import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLoginStore } from "./LoginForm.state"

interface LoginFormProps { }

export function LoginForm({ }: LoginFormProps) {
    const {
        username,
        password,
        isLoading,
        error,
        setUsername,
        setPassword,
        login
    } = useLoginStore()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await login()
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
                <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
                    {error}
                </div>
            )}
            <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                    Username
                </label>
                <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                    aria-invalid={!!error}
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                    Password
                </label>
                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    aria-invalid={!!error}
                />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading} onClick={handleSubmit}>
                {isLoading ? "Logging in..." : "Log in"}
            </Button>
        </form>
    )
}
