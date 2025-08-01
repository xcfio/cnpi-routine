import "./globals.css"
import type { Metadata } from "next"

const siteUrl = "https://routine-cnpi.netlify.app"
const title = "Chapainawabganj Polytechnic Institute - Class Routine"
const description = "Academic Schedule for Chapainawabganj Polytechnic Institute"

export const metadata: Metadata = {
    title,
    description,
    keywords: "class routine, polytechnic, 2025, chapainawabganj",
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: siteUrl + "/"
    },
    openGraph: {
        title,
        description,
        url: siteUrl,
        siteName: "CNPI Routine",
        locale: "en_US",
        type: "website"
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="class routine, polytechnic, 2025, chapainawabganj" />
                <link rel="canonical" href={siteUrl + "/"} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={siteUrl + "/"} />
                <meta property="og:site_name" content="CNPI Routine" />
                <meta property="og:type" content="website" />
                <meta property="og:image:alt" content="Chapainawabganj Polytechnic Institute Class Routine" />
                <meta name="google-site-verification" content="FgPL-EloG0FSVK8ZcvI3SDpBeCMXwoRKcP9c3kxVEAU" />
            </head>
            <body>{children}</body>
        </html>
    )
}
