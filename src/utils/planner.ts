// utils/planner.ts
export const planner: Planner = {
    2025: {
        9: {
            5: { off: true, cause: "Eid-e-Miladunnabi (Prophet Muhammad’s Birthday)" },
            6: { off: true, cause: "Madhu Purnima (Buddhist Festival)" },
            21: { off: true, cause: "Mahalaya (Durga Puja Begins)" },
            29: { off: true, cause: "Durga Puja" },
            30: { off: true, cause: "Durga Puja" }
        },
        10: {
            1: { off: true, cause: "Durga Puja Navami" },
            2: { off: true, cause: "Bijoya Dashami (Victory of Durga)" },
            6: { off: true, cause: "Lakshmi Puja (Kojagori Lakshmi Puja)" }
        },
        11: {
            6: { off: true, cause: "Maha Purnima (Bodhi Purnima Buddhist Festival)" },
            24: { off: true, cause: "Kali Puja (Shyama Puja)" },
            25: { off: true, cause: "Kali Puja (Shyama Puja)" }
        },
        12: {
            16: { off: true, cause: "Victory Day (Bijoy Dibosh)" },
            25: { off: true, cause: "Christmas Day" }
        }
    },
    2026: {
        2: {
            21: { off: true, cause: "International Mother Language Day (Language Martyrs’ Day)" }
        }
    }
}

export type Planner = {
    [Y in years]?: {
        [M in months]?: {
            [D in DaysOfMonth<M>]?: { off: boolean; cause: string }
        }
    }
}

export type DaysOfMonth<M extends months> = M extends 1 | 3 | 5 | 7 | 8 | 10 | 12
    ? Days31
    : M extends 4 | 6 | 9 | 11
    ? Days30
    : M extends 2
    ? Days29
    : never

// --- Core day sets ---
export type Days31 =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31

export type Days30 = Exclude<Days31, 31>
type Days29 = Exclude<Days30, 30>

// --- Core year/month sets ---
export type years = 2025 | 2026
export type months = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
