"use client"

import { useState, useEffect } from "react"
import AnimatedBackground from "@/components/AnimatedBackground"
import ThemeToggle from "@/components/ThemeToggle"
import RoutineForm from "@/components/RoutineForm"
import RoutineResult from "@/components/RoutineResult"
import { FormData, RoutineData } from "@/types"

export default function Home() {
    const [routineData, setRoutineData] = useState<RoutineData | null>(null)
    const [formData, setFormData] = useState<FormData | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        // Keyboard shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ctrl/Cmd + Enter to submit form
            if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                const form = document.querySelector("form")
                if (form && !loading) {
                    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }))
                }
            }

            // Ctrl/Cmd + D to download PDF
            if ((e.ctrlKey || e.metaKey) && e.key === "d") {
                e.preventDefault()
                if (routineData) {
                    // This will be handled by the RoutineResult component
                }
            }

            // Ctrl/Cmd + J to download JSON
            if ((e.ctrlKey || e.metaKey) && e.key === "j") {
                e.preventDefault()
                if (routineData) {
                    // This will be handled by the RoutineResult component
                }
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [loading, routineData])

    const handleFormSubmit = async (data: FormData) => {
        setLoading(true)
        setError(null)
        setRoutineData(null)

        try {
            const response = await fetch("/api/routine", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            if (response.ok) {
                setRoutineData(result)
                setFormData(data)
            } else {
                setError(result.error || "An error occurred while fetching the routine.")
            }
        } catch (err) {
            setError("Failed to connect to the server. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <AnimatedBackground />
            <ThemeToggle />

            <div className="container">
                {/* Header */}
                <div className="header">
                    <h1 className="logo">Class Routine</h1>
                    <p className="subtitle">Academic Schedule Management</p>
                    <p className="institute-name">Chapainawabganj Polytechnic Institute</p>
                </div>

                {/* Form Section */}
                <RoutineForm onSubmit={handleFormSubmit} loading={loading} />

                {/* Result Section */}
                <RoutineResult data={routineData!} formData={formData!} error={error} />
            </div>
        </>
    )
}
