import { NextRequest, NextResponse } from "next/server"
import { FormData, PostReturn } from "@/types"
import { db, table } from "@/database"
import { and, eq } from "drizzle-orm"

export async function POST(request: NextRequest) {
    try {
        const { year, department, semester, shift, group } = (await request.json()) as FormData

        if (!year || !department || !semester || !shift || !group) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const [data] = await db
            .select()
            .from(table.student)
            .where(
                and(eq(table.student.year, year), eq(table.student.code, `${department}-${semester}${group}${shift}`))
            )

        if (!data) return NextResponse.json({ error: "Routine not found" }, { status: 404 })

        return NextResponse.json(data)
    } catch (error) {
        console.error("Error fetching routine:", error)
        return NextResponse.json({ error: "Failed to fetch routine data. Please try again." }, { status: 500 })
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const key = searchParams.get("key")
        const year = searchParams.get("year")

        if (!key) {
            return NextResponse.json({ error: "Key is required" }, { status: 400 })
        }

        if (key !== process.env.SECRET) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 })
        }

        if (!year || Number.isNaN(Number(year))) {
            return NextResponse.json({ error: "Invalid year" }, { status: 400 })
        }

        const routine: PostReturn = await request.json()
        if (!routine || typeof routine !== "object") {
            return NextResponse.json({ error: "Invalid body" }, { status: 400 })
        }
        if (!routine.code || !routine.load || !routine.class || !routine.teacher) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const [result] = await db
            .insert(table.student)
            .values({ ...routine, year })
            .returning()

        return NextResponse.json(result, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}
