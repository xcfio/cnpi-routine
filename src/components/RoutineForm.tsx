"use client"

import { useState } from "react"
import { FormData } from "@/types"

interface RoutineFormProps {
    onSubmit: (data: FormData) => void
    loading: boolean
}

export default function RoutineForm({ onSubmit, loading }: RoutineFormProps) {
    const [formData, setFormData] = useState<FormData>({
        year: "",
        department: "",
        semester: "",
        shift: "",
        group: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Remove empty group field if not selected
        const data = { ...formData }
        onSubmit(data)
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

        // Add visual feedback for valid selection
        e.target.style.borderColor = value ? "#48bb78" : ""
    }

    return (
        <div className="form-section">
            <h2 className="form-title">Get Your Class Routine</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div className="form-group">
                        <label className="form-label" htmlFor="year">
                            Academic Year
                        </label>
                        <select
                            className="form-select"
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Year</option>
                            <option value="2025">2025</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="department">
                            Department
                        </label>
                        <select
                            className="form-select"
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Department</option>
                            <option value="67">67 - Electrical Technology</option>
                            <option value="68">68 - Electronics Technology</option>
                            <option value="69">69 - Food Technology</option>
                            <option value="72">72 - Refrigeration and Air-conditioning Technology</option>
                            <option value="85">85 - Computer Science and Technology</option>
                            <option value="92">92 - Mechatronics Technology</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="semester">
                            Semester
                        </label>
                        <select
                            className="form-select"
                            id="semester"
                            name="semester"
                            value={formData.semester}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Semester</option>
                            <option value="1">1st Semester</option>
                            <option value="2">2nd Semester</option>
                            <option value="3">3rd Semester</option>
                            <option value="4">4th Semester</option>
                            <option value="5">5th Semester</option>
                            <option value="6">6th Semester</option>
                            <option value="7">7th Semester</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="shift">
                            Shift
                        </label>
                        <select
                            className="form-select"
                            id="shift"
                            name="shift"
                            value={formData.shift}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Shift</option>
                            <option value="1">1st Shift (Morning)</option>
                            <option value="2">2nd Shift (Day)</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="group">
                            Group
                        </label>
                        <select
                            className="form-select"
                            id="group"
                            name="group"
                            value={formData.group}
                            onChange={handleChange}
                        >
                            <option value="">Select Group</option>
                            <option value="A">Group A</option>
                            <option value="B">Group B</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? (
                        <>
                            <span className="loading"></span>
                            Loading...
                        </>
                    ) : (
                        "Get Routine"
                    )}
                </button>
            </form>
        </div>
    )
}
