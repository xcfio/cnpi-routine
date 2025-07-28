import { FastifyRequest, FastifyReply } from "fastify"
import { db, table } from "../database"
import { and, eq } from "drizzle-orm"
export async function post(
    request: FastifyRequest<{
        Body: {
            year: string
            department: string
            semester: string
            shift: string
            group: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { year, department, semester, shift, group } = request.body

        // Validate the input
        if (!year || !department || !semester || !shift || !group) {
            return reply.code(400).send({ error: "All fields are required" })
        }

        const [data] = await db
            .select()
            .from(table.student)
            .where(
                and(eq(table.student.year, year), eq(table.student.code, `${department}-${semester}${group}${shift}`))
            )

        if (!data) return reply.code(404).send({ error: "Routine not found" })
        return reply.code(200).send(data)
    } catch (error) {
        console.log(error)
        return reply.code(500).send({ error: "Internal Server Error" })
    }
}
