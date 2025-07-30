"use client"

import { useEffect, useRef } from "react"
import { RoutineData, FormData } from "@/types"
import RoutineTable from "./RoutineTable"
import TeacherList from "./TeacherList"
import { downloadJSON, downloadPDF } from "@/utils/downloadUtils"

interface RoutineResultProps {
    data: RoutineData | null
    formData: FormData | null
    error: string | null
}

export default function RoutineResult({ data, formData, error }: RoutineResultProps) {
    const resultRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (data || error) {
            // Scroll to results section
            setTimeout(() => {
                resultRef.current?.scrollIntoView({ behavior: "smooth" })
            }, 100)
        }
    }, [data, error])

    if (!data && !error) {
        return null
    }

    const getDepartmentName = (code: string) => {
        const departments: { [key: string]: string } = {
            "67": "Electrical Technology",
            "68": "Electronics Technology",
            "69": "Food Technology",
            "72": "Refrigeration and Air-conditioning Technology",
            "85": "Computer Science and Technology",
            "92": "Mechatronics Technology"
        }
        return departments[code] || "Unknown Department"
    }

    const getRoutineInfo = () => {
        if (!formData) return ""

        const deptName = getDepartmentName(formData.department)
        return `${deptName} | Semester ${formData.semester} | Shift ${formData.shift} | Year ${formData.year}${
            formData.group ? ` | Group ${formData.group}` : ""
        }`
    }

    const handleDownloadJSON = () => {
        if (data) {
            downloadJSON(data)
        }
    }

    const handleDownloadPDF = () => {
        if (data) {
            downloadPDF(data, getRoutineInfo())
        }
    }

    return (
        <div ref={resultRef} className="result-section">
            <div className="result-header">
                <div>
                    <h3 className="result-title">Class Routine</h3>
                    <p className="result-info">{error ? "Error occurred" : getRoutineInfo()}</p>
                </div>
                {data && (
                    <div className="download-buttons">
                        <button className="btn btn-secondary" onClick={handleDownloadJSON}>
                            📄 Download JSON
                        </button>
                        <button className="btn btn-success" onClick={handleDownloadPDF}>
                            📥 Download PDF
                        </button>
                    </div>
                )}
            </div>

            <div id="routineContent">
                {error ? <div className="error-message">{error}</div> : data ? <RoutineTable data={data} /> : null}
            </div>

            {data && data.teacher && <TeacherList teachers={data.teacher} />}
        </div>
    )
}
