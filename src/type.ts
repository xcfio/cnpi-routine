declare global {
    namespace NodeJS {
        interface ProcessEnv {
            URI: string
            SECRET: string
        }
    }
}

export type PostReturn = {
    code: `${"67" | "68" | "69" | "72" | "85" | "92"}-${"1" | "2" | "3" | "4" | "5" | "6" | "7"}${"A" | "B"}${
        | "1"
        | "2"}`
    load: string
    class: {
        [day in "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday"]: {
            [period in "1" | "2" | "3" | "4" | "5" | "6" | "7"]: {
                time: string
                subject: string
                teacher: string
                classroom: string
            }
        }
    }
    teacher: Array<{
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
}
