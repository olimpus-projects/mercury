import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLoginStore } from "./LoginForm.state"

interface LoginFormProps { }

export function LoginForm({ }: LoginFormProps) {
    const {
        email,
        password,
        isLoading,
        error,
        setEmail,
        setPassword,
        login
    } = useLoginStore()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await login()
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {error && (
                <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
                    {error}
                </div>
            )}
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                    Email
                </label>
                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    aria-invalid={!!error}
                />
            </div>
            <div className="space-y-2 flex-row">
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
            <div className="flex justify-center">
                <Button type="submit" className="w-1/4 cursor-pointer" disabled={isLoading} onClick={handleSubmit}>
                    {isLoading ? "Logging in..." : "Log in"}
                </Button>
            </div>
        </form>
    )
}
