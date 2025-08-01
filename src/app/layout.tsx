import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Chapainawabganj Polytechnic Institute - Class Routine",
    description: "Academic Schedule for Chapainawabganj Polytechnic Institute",
    keywords: 'class routine, polytechnic, 2025, Chapainawabganj',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title>Chapainawabganj Polytechnic Class Routine</title>
                <meta name="description" content="Academic Schedule for Chapainawabganj Polytechnic Institute" />
                <meta name="keywords" content="class routine, polytechnic, 2025, Chapainawabganj" />
                <meta name="theme-color" content="#2196f3">
                <meta name="google-site-verification" content="etSkyVopRchIy48MQQWDkKZ3lKmJAKnLpa690GsAXcU" />
            </head>
            <body>{children}</body>
        </html>
    )
}
