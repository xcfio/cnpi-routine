import { NextRequest, NextResponse } from "next/server"
import { FormData } from "@/types"

export async function POST(request: NextRequest) {
    try {
        const { department, semester, shift, year, group }: FormData = await request.json()
        if (!year || !department || !semester || !shift || !group) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const response = await fetch(`${process.env.API_ENDPOINT}/routine`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ department, semester, shift, year, group })
        })

        return NextResponse.json({ ...response.json() }, { status: response.status })
    } catch (error) {
        console.error("Error fetching routine:", error)
        return NextResponse.json({ error: "Failed to fetch routine data. Please try again." }, { status: 500 })
    }
}
