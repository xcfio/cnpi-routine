"use client"

import { useState, useEffect } from "react"
import { FormData, RoutineData } from "@/types"
import RoutineForm from "@/components/RoutineForm"
import RoutineResult from "@/components/RoutineResult"
import Footer from "@/components/Footer"
import Banner from "@/components/Banner"

export default function Home() {
    const [routineData, setRoutineData] = useState<RoutineData | null>(null)
    const [formData, setFormData] = useState<FormData | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        // Keyboard shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            // Enter to submit form
            if (e.key === "Enter") {
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
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/routine`, {
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
                setError(result.message || result.error || "An error occurred while fetching the routine.")
            }
        } catch (err) {
            setError("Failed to connect to the server. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {new Date("2025-08-10T17:59:59Z") < new Date() || (
                <Banner
                    type="info"
                    message="This project is currently in beta. We're actively working on improvements. Feel free to report any bugs or share feedback."
                    actionText="Report Issue"
                    onAction={() => window.open("https://github.com/xcfio/cnpi-routine/issues", "_blank")}
                />
            )}
            <div className="bg-animation">
                <div className="floating-shapes">
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
                <div className="gradient-orb"></div>
                <div className="gradient-orb"></div>
                <div className="gradient-orb"></div>
            </div>

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
                <RoutineResult data={routineData} formData={formData} error={error} />
            </div>
            <Footer />
        </>
    )
}
