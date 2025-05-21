"use client"

import type { FormEvent } from "react"

import { Button, Card, Checkbox, Form, Link, TextField, toast } from "@/components/ui"

export function LoginForm() {
	const submit = (e: FormEvent) => {
		e.preventDefault()

		toast.success("Login Successful")
	}
	return (
		<Form onSubmit={submit}>
			<Card className="relative inset-shadow-fg/5 inset-shadow-xs border-0 ring ring-fg/10 dark:inset-ring-fg/5">
				<Card.Header>
					<Card.Title>Login</Card.Title>
					<Card.Description>Login to your account</Card.Description>
				</Card.Header>
				<Card.Content className="space-y-6">
					<TextField label="Email" name="email" type="email" isRequired />
					<TextField label="Password" name="password" type="password" isRequired />
					<div className="flex items-center justify-between">
						<Checkbox>Remember me</Checkbox>
						<Link href="#">Forgot password?</Link>
					</div>
				</Card.Content>
				<Card.Footer>
					<Button type="submit">Login</Button>
				</Card.Footer>
			</Card>
		</Form>
	)
}
