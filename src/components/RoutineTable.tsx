"use client"

import { RoutineData } from "@/types"

interface RoutineTableProps {
    data: RoutineData
}

export default function RoutineTable({ data }: RoutineTableProps) {
    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]

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

                    return periods.map((period, index) => {
                        const classInfo = dayClasses[period]
                        const isFirstRow = index === 0

                        return (
                            <tr key={`${day}-${period}`}>
                                {/* Mobile-only day section */}
                                {isFirstRow && (
                                    <tr className="mobile-day-section">
                                        <td colSpan={5} className="day-header">
                                            <div className="day-name">{day}</div>
                                        </td>
                                    </tr>
                                )}

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
                                    <span className="classroom">{classInfo.classroom || "N/A"}</span>
                                </td>
                            </tr>
                        )
                    })
                })}
            </tbody>
        </table>
    )
}
