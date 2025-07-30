"use client"

import { useState, useEffect } from "react"

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Check if there's a saved theme preference
        const savedTheme = localStorage.getItem("theme")
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

        const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)
        setIsDark(shouldBeDark)

        if (shouldBeDark) {
            document.body.setAttribute("data-theme", "dark")
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !isDark
        setIsDark(newTheme)

        if (newTheme) {
            document.body.setAttribute("data-theme", "dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.body.removeAttribute("data-theme")
            localStorage.setItem("theme", "light")
        }
    }

    return (
        <div className="theme-toggle" onClick={toggleTheme}>
            <span>{isDark ? "☀️" : "🌙"}</span>
        </div>
    )
}
