import { FastifyRequest, FastifyReply } from "fastify"
import { PostReturn } from "../type"
import { db, table } from "../database"

export async function put(
    request: FastifyRequest<{ Querystring: { key: string; year: string }; Body: PostReturn }>,
    reply: FastifyReply
) {
    try {
        const { key, year } = request.query
        console.log(key)
        if (!key) return reply.code(400).send({ error: "Key is required" })
        if (key !== process.env.SECRET) return reply.code(403).send({ error: "Forbidden" })

        const routine = request.body
        if (!routine || typeof routine !== "object") return reply.code(400).send({ error: "Invalid body" })
        if (!routine.code || !routine.load || !routine.class || !routine.teacher) {
            return reply.code(400).send({ error: "Missing required fields" })
        }

        const [result] = await db
            .insert(table.student)
            .values({ ...routine, year })
            .returning()
        return reply.code(201).send(result)
    } catch (error) {
        console.log(error)
        return reply.code(500).send({ error: "Internal Server Error" })
    }
}
