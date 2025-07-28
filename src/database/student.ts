import { pgTable, uuid, varchar, json, check } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"
import { v7 } from "uuid"

export const student = pgTable(
    "student",
    {
        id: uuid("id")
            .unique()
            .primaryKey()
            .$defaultFn(() => v7()),
        year: varchar("year", { length: 4 }).notNull().default(new Date().getFullYear().toString()),
        code: varchar("code", { length: 15 }).notNull(),
        load: varchar("load").notNull(),
        class: json("class")
            .$type<{
                [day in "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday"]: {
                    [period in "1" | "2" | "3" | "4" | "5" | "6" | "7"]: {
                        time: string
                        subject: string
                        teacher: string
                        classroom: string
                    }
                }
            }>()
            .notNull(),
        teacher: json("teacher")
            .$type<
                Array<{
                    teacher: {
                        name: string
                        code: string
                        designation: string
                        mobile: string
                    }
                    subject: {
                        name: string
                        code: string
                    }
                }>
            >()
            .notNull()
    },
    (table) => [check("code_pattern", sql`${table.code} ~ '^(67|68|69|72|85|92)-[1-7][AB][12]$'`)]
)
