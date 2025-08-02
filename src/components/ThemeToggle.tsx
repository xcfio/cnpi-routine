"use client"

import { useState, useEffect } from "react"

export default function ThemeToggle() {
    const [isLight, setIsLight] = useState(false)

    useEffect(() => {
        // Check if there's a saved theme preference
        const savedTheme = localStorage.getItem("theme")
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches

        const shouldBeLight = savedTheme === "light" || (!savedTheme && prefersLight)
        setIsLight(shouldBeLight)

        if (shouldBeLight) {
            document.body.setAttribute("data-theme", "light")
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !isLight
        setIsLight(newTheme)

        if (newTheme) {
            document.body.setAttribute("data-theme", "light")
            localStorage.setItem("theme", "light")
        } else {
            document.body.removeAttribute("data-theme")
            localStorage.setItem("theme", "dark")
        }
    }

    return (
        <div className="theme-toggle" onClick={toggleTheme}>
            <span>{isLight ? "🌙" : "☀️"}</span>
        </div>
    )
}
