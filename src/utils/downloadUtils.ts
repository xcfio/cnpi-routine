import { RoutineData } from "@/types"
import { room } from "./lab"

export const downloadJSON = (data: RoutineData) => {
    const string = JSON.stringify(data, null, 4)
    const bin = new Blob([string], { type: "application/json" })

    const url = URL.createObjectURL(bin)
    const link = document.createElement("a")

    link.href = url
    link.download = `${data.code}.json`

    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    URL.revokeObjectURL(url)
}

export const downloadPDF = (data: RoutineData, routineInfo: string) => {
    // Import jsPDF dynamically
    import("jspdf").then(({ jsPDF }) => {
        const doc = new jsPDF()

        // Set font
        doc.setFont("helvetica")

        // Header
        doc.setFontSize(20)
        doc.setTextColor(40, 40, 40)
        doc.text("Class Routine", 105, 20, { align: "center" })

        doc.setFontSize(12)
        doc.text("Chapainawabganj Polytechnic Institute", 105, 30, { align: "center" })

        // Routine info
        doc.setFontSize(10)
        doc.text(routineInfo, 105, 40, { align: "center" })

        // Table headers
        let yPosition = 60
        doc.setFontSize(10)
        doc.setFont("helvetica", "bold")

        const headers = ["Day", "Time", "Subject", "Teacher", "Room"]
        const columnWidths = [38, 38, 38, 38, 38]
        let xPosition = 10

        headers.forEach((header, index) => {
            doc.rect(xPosition, yPosition, columnWidths[index], 10)
            doc.text(header, xPosition + 2, yPosition + 7)
            xPosition += columnWidths[index]
        })

        yPosition += 10
        doc.setFont("helvetica", "normal")

        // Table data
        const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]

        for (const day of days) {
            if (data.class && data.class[day]) {
                const dayClasses = data.class[day]
                let isFirstRow = true

                for (const period in dayClasses) {
                    const classInfo = dayClasses[period]
                    const classroom = classInfo.classroom
                        ? !classInfo.classroom.includes("-")
                            ? room[classInfo.classroom as keyof typeof room]
                            : classInfo.classroom
                        : ""
                    xPosition = 10

                    // Day column (only for first row of each day)
                    if (isFirstRow) {
                        doc.rect(xPosition, yPosition, columnWidths[0], 10)
                        doc.text(day, xPosition + 2, yPosition + 7)
                    }
                    xPosition += columnWidths[0]

                    // Time column
                    doc.rect(xPosition, yPosition, columnWidths[1], 10)
                    doc.text(classInfo.time || period, xPosition + 2, yPosition + 7)
                    xPosition += columnWidths[1]

                    // Subject column
                    doc.rect(xPosition, yPosition, columnWidths[2], 10)
                    const subject = classInfo.subject.split("(")[1]?.split(")")[0] || ""
                    doc.text(
                        subject.length > 25 ? subject.substring(0, 22) + "..." : subject,
                        xPosition + 2,
                        yPosition + 7
                    )
                    xPosition += columnWidths[2]

                    // Teacher column
                    doc.rect(xPosition, yPosition, columnWidths[3], 10)
                    const teacher = classInfo.teacher.split("(")[1]?.split(")")[0] || ""
                    doc.text(
                        teacher.length > 20 ? teacher.substring(0, 17) + "..." : teacher,
                        xPosition + 2,
                        yPosition + 7
                    )
                    xPosition += columnWidths[3]

                    // Classroom column
                    doc.rect(xPosition, yPosition, columnWidths[4], 10)
                    doc.text(classroom, xPosition + 2, yPosition + 7)

                    yPosition += 10
                    isFirstRow = false

                    // Check if we need a new page
                    if (yPosition > 280) {
                        doc.addPage()
                        yPosition = 20
                    }
                }
            }
        }

        // Add teacher information on new page if available
        if (data.teacher && data.teacher.length > 0) {
            doc.addPage()
            yPosition = 20

            doc.setFontSize(16)
            doc.setFont("helvetica", "bold")
            doc.text("Teachers", 105, yPosition, { align: "center" })
            yPosition += 20

            doc.setFontSize(10)
            doc.setFont("helvetica", "normal")

            data.teacher.forEach((item) => {
                doc.setFont("helvetica", "bold")
                doc.text(`${item.name}`, 10, yPosition)
                yPosition += 5

                doc.setFont("helvetica", "normal")
                doc.text(`Designation: ${item.designation}`, 10, yPosition)
                yPosition += 5
                doc.text(`Mobile: ${item.mobile}`, 10, yPosition)
                yPosition += 5
                doc.text(`Subject: ${item.subject}`, 10, yPosition)
                yPosition += 10

                if (yPosition > 280) {
                    doc.addPage()
                    yPosition = 20
                }
            })
        }

        // Save the PDF
        doc.save(`${data.code}.pdf`)
    })
}
