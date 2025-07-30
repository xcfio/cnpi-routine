import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Chapainawabganj Polytechnic Institute - Class Routine",
    description: "Academic Schedule Management System for Chapainawabganj Polytechnic Institute"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="google-site-verification" content="etSkyVopRchIy48MQQWDkKZ3lKmJAKnLpa690GsAXcU" />
            </head>
            <body>{children}</body>
        </html>
    )
}
