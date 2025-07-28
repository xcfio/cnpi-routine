import { post, put } from "./routes"
import { html } from "./public"
import Fastify from "fastify"

export default async () => {
    const fastify = Fastify({ logger: false })

    fastify.get("/", (_, reply) => reply.type("text/html").send(html))
    fastify.get("/status", (_, reply) => reply.code(200).send({ status: "ok" }))

    const classSchedule = {
        type: "object",
        properties: {
            time: { type: "string" },
            subject: { type: "string" },
            teacher: { type: "string" },
            classroom: { type: "string" }
        }
    }

    const dailySchedule = {
        type: "object",
        properties: {
            "1": classSchedule,
            "2": classSchedule,
            "3": classSchedule,
            "4": classSchedule,
            "5": classSchedule,
            "6": classSchedule,
            "7": classSchedule
        }
    }

    fastify.route({
        method: "POST",
        url: "/routine",
        schema: {
            body: {
                type: "object",
                required: ["year", "semester", "department", "shift"],
                properties: {
                    year: { type: "string" },
                    department: { type: "string" },
                    semester: { type: "string" },
                    shift: { type: "string" },
                    group: { type: "string" }
                }
            },
            response: {
                200: {
                    type: "object",
                    properties: {
                        code: { type: "string" },
                        load: { type: "string" },
                        class: {
                            type: "object",
                            properties: {
                                Sunday: dailySchedule,
                                Monday: dailySchedule,
                                Tuesday: dailySchedule,
                                Wednesday: dailySchedule,
                                Thursday: dailySchedule
                            }
                        },
                        teacher: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    teacher: {
                                        type: "object",
                                        properties: {
                                            name: { type: "string" },
                                            code: { type: "string" },
                                            designation: { type: "string" },
                                            mobile: { type: "string" }
                                        }
                                    },
                                    subject: {
                                        type: "object",
                                        properties: {
                                            name: { type: "string" },
                                            code: { type: "string" }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "4xx": {
                    type: "object",
                    properties: {
                        error: { type: "string" }
                    }
                },
                "5xx": {
                    type: "object",
                    properties: {
                        error: { type: "string" }
                    }
                }
            }
        },
        handler: post
    })

    fastify.route({
        method: "PUT",
        url: "/routine",
        schema: {
            querystring: {
                type: "object",
                required: ["key"],
                properties: {
                    key: { type: "string" },
                    year: { type: "string" }
                }
            },
            body: {
                type: "object",
                properties: {
                    code: { type: "string" },
                    load: { type: "string" },
                    class: {
                        type: "object",
                        properties: {
                            Sunday: dailySchedule,
                            Monday: dailySchedule,
                            Tuesday: dailySchedule,
                            Wednesday: dailySchedule,
                            Thursday: dailySchedule
                        }
                    },
                    teacher: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                teacher: {
                                    type: "object",
                                    properties: {
                                        name: { type: "string" },
                                        code: { type: "string" },
                                        designation: { type: "string" },
                                        mobile: { type: "string" }
                                    }
                                },
                                subject: {
                                    type: "object",
                                    properties: {
                                        name: { type: "string" },
                                        code: { type: "string" }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            response: {
                201: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                        message: { type: "string" }
                    }
                },
                "4xx": {
                    type: "object",
                    properties: {
                        error: { type: "string" }
                    }
                },
                "5xx": {
                    type: "object",
                    properties: {
                        error: { type: "string" }
                    }
                }
            }
        },
        handler: put
    })

    fastify.addHook("onError", (_, reply, error) => {
        if (error.code === "FST_ERR_VALIDATION") {
            reply.code(400).send({ error: "Bad Request", message: error.message })
            return
        }
        console.error(error)
        reply.code(500).send({ error: "Internal Server Error" })
    })

    return fastify
}
