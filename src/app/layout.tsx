import "./globals.css"
import type { Metadata } from "next"

export const siteUrl = "https://routine-cnpi.netlify.app"
export const title = "Chapainawabganj Polytechnic Institute - Class Routine"
export const description = "Academic Schedule for Chapainawabganj Polytechnic Institute"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            {children}
        </html>
    )
}
