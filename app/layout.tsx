import { Providers } from "@/components/providers"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: {
		template: "%s / HQ UI Starter Kit with Next",
		default: "HQ UI Starter Kit with Next",
	},
	description: "Next.js 15 Starter Kit with Tailwind CSS, TypeScript, React, React Aria Components, HQ UI Components",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true} className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className="min-h-dvh antialiased">
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
