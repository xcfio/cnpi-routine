import Fastify from "fastify"
import { readFileSync } from "node:fs"

export default async () => {
    const fastify = Fastify({ logger: false })

    fastify.get("/", (_, reply) => reply.type("text/html").send(readFileSync("./public/index.html")))
    fastify.get("/status", (_, reply) => reply.code(200).send({ status: "ok" }))

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
                                Sunday: {
                                    type: "object",
                                    properties: {
                                        "1": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "2": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "3": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "4": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "5": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "6": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "7": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        }
                                    }
                                },
                                Monday: {
                                    type: "object",
                                    properties: {
                                        "1": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "2": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "3": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "4": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "5": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "6": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "7": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        }
                                    }
                                },
                                Tuesday: {
                                    type: "object",
                                    properties: {
                                        "1": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "2": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "3": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "4": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "5": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "6": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "7": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        }
                                    }
                                },
                                Wednesday: {
                                    type: "object",
                                    properties: {
                                        "1": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "2": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "3": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "4": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "5": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "6": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "7": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        }
                                    }
                                },
                                Thursday: {
                                    type: "object",
                                    properties: {
                                        "1": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "2": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "3": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "4": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "5": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "6": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        },
                                        "7": {
                                            type: "object",
                                            properties: {
                                                time: { type: "string" },
                                                subject: { type: "string" },
                                                teacher: { type: "string" },
                                                classroom: { type: "string" }
                                            }
                                        }
                                    }
                                }
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
        handler: (request, reply) => JSON.parse(readFileSync("D:/Project/test/routine/2025-85-1B1.json", "utf-8"))
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
