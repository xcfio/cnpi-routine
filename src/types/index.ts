declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_CLOUDFLARE_SITE_KEY: string
            NEXT_PUBLIC_API_ENDPOINT: string
        }
    }
}

export interface FormData {
    year: string
    department: string
    semester: string
    shift: string
    group: string
}

export interface ClassInfo {
    time: string
    subject: string
    teacher: string
    classroom: string
}

export interface DayClasses {
    [period: string]: ClassInfo
}

export interface TeacherInfo {
    name: string
    designation: string
    mobile: string
    subject: string
}

export interface RoutineData {
    code: string
    class: {
        [day: string]: DayClasses
    }
    teacher: TeacherInfo[]
}

export interface ApiResponse {
    success: boolean
    data?: RoutineData
    error?: string
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
        name: string
        designation: string
        mobile: string
        subject: string
    }>
}
// Extend Window interface for Turnstile

declare global {
    interface Window {
        turnstile?: {
            render: (
                element: string,
                options: {
                    sitekey: string
                    callback: (token: string) => void
                    "expired-callback": () => void
                    "error-callback": () => void
                }
            ) => string
            reset: (widgetId: string) => void
        }
    }
}
