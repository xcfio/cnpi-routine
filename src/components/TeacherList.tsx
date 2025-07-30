"use client"

import { TeacherInfo } from "@/types"

interface TeacherListProps {
    teachers: TeacherInfo[]
}

export default function TeacherList({ teachers }: TeacherListProps) {
    if (!teachers || teachers.length === 0) {
        return null
    }

    return (
        <div className="teacher-list">
            <h3>Teachers</h3>
            {teachers.map((teacher, index) => (
                <div key={index} className="teacher-card">
                    <div className="teacher-info">
                        <div className="teacher-details">
                            <h4>{teacher.name}</h4>
                            <p>
                                <strong>Designation:</strong> {teacher.designation}
                            </p>
                            <p>
                                <strong>Mobile:</strong> {teacher.mobile}
                            </p>
                        </div>
                        <div className="subject-badge">{teacher.subject}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
