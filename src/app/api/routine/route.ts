import { NextRequest, NextResponse } from "next/server"
import { FormData, RoutineData } from "@/types"

export async function POST(request: NextRequest) {
    try {
        const formData: FormData = await request.json()

        // Validate required fields
        if (!formData.year || !formData.department || !formData.semester || !formData.shift) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        // Mock API call - replace this with your actual API endpoint
        const response = await fetch(`${process.env.API_ENDPOINT}/routine`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        if (!response.ok) {
            throw new Error("Failed to fetch routine data")
        }

        const data: RoutineData = await response.json()

        return NextResponse.json(data)
    } catch (error) {
        console.error("Error fetching routine:", error)
        return NextResponse.json({ error: "Failed to fetch routine data. Please try again." }, { status: 500 })
    }
}
