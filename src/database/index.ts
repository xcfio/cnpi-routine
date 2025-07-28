import { drizzle } from "drizzle-orm/postgres-js"
import { student } from "./student"
import postgres from "postgres"

export const db = drizzle({ client: postgres(process.env.URI) })

export const table = { student } as const
