import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLoginStore } from "./LoginForm.state"

export function LoginForm(): React.ReactElement {
    const {
        email,
        password,
        isLoading,
        error,
        currentStep,
        setEmail,
        setPassword,
        confirmEmail,
        goBackToEmail,
        loginWithEmail
    } = useLoginStore()

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        await loginWithEmail()
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {error && (
                <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
                    {error}
                </div>
            )}
            <div className="text-xs text-muted-foreground">Step {currentStep} of 2</div>

            {currentStep === 1 && (
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
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault()
                                confirmEmail()
                            }
                        }}
                    />
                    <div className="flex justify-end">
                        <Button
                            type="button"
                            className="cursor-pointer"
                            disabled={isLoading}
                            onClick={confirmEmail}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            )}

            {currentStep === 2 && (
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
                        onKeyDown={async (e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault()
                                await handleSubmit(e)
                            }
                        }}
                    />
                    <div className="flex items-center justify-between">
                        <Button
                            type="button"
                            variant="ghost"
                            className="cursor-pointer"
                            disabled={isLoading}
                            onClick={goBackToEmail}
                        >
                            Back
                        </Button>
                        <Button
                            type="submit"
                            className="cursor-pointer"
                            disabled={isLoading}
                            onClick={handleSubmit}
                        >
                            {isLoading ? "Logging in..." : "Login"}
                        </Button>
                    </div>
                </div>
            )}
        </form>
    )
}
