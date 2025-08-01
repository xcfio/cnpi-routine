"use client"

import { RoutineData } from "@/types"

interface RoutineTableProps {
    data: RoutineData
}

export default function RoutineTable({ data }: RoutineTableProps) {
    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
    const room = {
        BEL: "BEL",
        CHE: "CHE",
        DEL: "DEL",
        DRG: "DRG (S-513)",
        EPL: "EPL",
        EWM: "EWM (S-314)",
        FLD: "FLD",
        FLU: "FLU (N-207)",
        FPL: "FPL",
        HWL: "HWL",
        ICT: "ICT (N-310)",
        MnT: "MnT",
        MSL: "MSL",
        NWL: "NWL (S-417)",
        PHY: "PHY (N-413)",
        QCL: "QCL",
        RAC: "RAC",
        SWL: "SWL (S-420)",
        WSM: "WSM"
    }

    return (
        <table className="routine-table">
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Subject</th>
                    <th>Teacher</th>
                    <th>Classroom</th>
                </tr>
            </thead>
            <tbody>
                {days.map((day) => {
                    if (!data.class || !data.class[day]) return null

                    const dayClasses = data.class[day]
                    const periods = Object.keys(dayClasses)

                    return periods
                        .map((period, index) => {
                            const classInfo = dayClasses[period]
                            const isFirstRow = index === 0

                            const classroom = classInfo.classroom
                                ? !classInfo.classroom.includes("-")
                                    ? room[classInfo.classroom as keyof typeof room]
                                    : classInfo.classroom
                                : "N/A"

                            // Return an array of tr elements for mobile day header + regular row
                            const rows = []

                            // Add mobile day section as separate row
                            if (isFirstRow) {
                                rows.push(
                                    <tr key={`${day}-header`} className="mobile-day-section">
                                        <td colSpan={5} className="day-header">
                                            <div className="day-name">{day}</div>
                                        </td>
                                    </tr>
                                )
                            }

                            // Add the main row
                            rows.push(
                                <tr key={`${day}-${period}`}>
                                    {/* Desktop day column */}
                                    {isFirstRow && (
                                        <td rowSpan={periods.length} className="desktop-day">
                                            <strong>{day}</strong>
                                        </td>
                                    )}

                                    <td className="class-time" data-label="Time">
                                        {classInfo.time || period}
                                    </td>
                                    <td className="subject-name" data-label="Subject">
                                        {classInfo.subject || "N/A"}
                                    </td>
                                    <td className="teacher-name" data-label="Teacher">
                                        {classInfo.teacher || "N/A"}
                                    </td>
                                    <td data-label="Room">
                                        <span className="classroom">{classroom}</span>
                                    </td>
                                </tr>
                            )

                            return rows
                        })
                        .flat()
                })}
            </tbody>
        </table>
    )
}
