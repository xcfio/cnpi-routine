export const planner: Planner = {
    2025: {
        9: {
            5: { off: true, cause: "Eid e-Milad-un Nabi" },
            6: { off: true, cause: "Madhu Purnima" },
            21: { off: true, cause: "Mahalaya" },
            29: { off: true, cause: "Durga Puja" },
            30: { off: true, cause: "Ashtami" }
        },
        10: {
            1: { off: true, cause: "Mahanabami" },
            2: { off: true, cause: "Durga Puja" },
            4: { off: true, cause: "Fateha-i-Yajdaham" },
            6: { off: true, cause: "Lakshmi Puja" },
            20: { off: true, cause: "Sri Shayama Puja" }
        },
        12: {
            16: { off: true, cause: "Victory Day" },
            25: { off: true, cause: "Christmas Day" }
        }
    },
    2026: {
        2: {
            4: { off: true, cause: "Shab e-Barat" }
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
