"use client"
import { Calendar, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react"
import { planner, years, months, DaysOfMonth } from "@/utils/planner"
import React, { useState, useMemo } from "react"
import Footer from "@/components/Footer"
import "./style.css"

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default function PlannerApp() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    const currentYear = currentDate.getFullYear() as years
    const currentMonth = (currentDate.getMonth() + 1) as months

    const isDayOff = (year: years, month: months, day: number): { isOff: boolean; cause: string } => {
        const date = new Date(year, month - 1, day)
        const dayOfWeek = date.getDay()

        // @ts-ignore
        const plannerEntry = planner[year]?.[month]?.[day as DaysOfMonth<months>]
        if (plannerEntry) {
            return { isOff: plannerEntry.off, cause: plannerEntry.cause }
        }

        if (dayOfWeek === 5 || dayOfWeek === 6) {
            return {
                isOff: true,
                cause: dayOfWeek === 5 ? "Regular Friday Off" : "Regular Saturday Off"
            }
        }

        return { isOff: false, cause: "Regular Class Day" }
    }

    const getCalendarDays = useMemo(() => {
        const year = currentYear
        const month = currentMonth
        const firstDay = new Date(year, month - 1, 1)
        const startDate = new Date(firstDay)
        startDate.setDate(startDate.getDate() - firstDay.getDay())

        const days = []
        const current = new Date(startDate)

        for (let i = 0; i < 42; i++) {
            const day = current.getDate()
            const isCurrentMonth = current.getMonth() === month - 1
            const dayInfo = isCurrentMonth ? isDayOff(year, month, day) : { isOff: false, cause: "" }

            days.push({
                date: new Date(current),
                day,
                isCurrentMonth,
                ...dayInfo
            })

            current.setDate(current.getDate() + 1)
        }

        return days
    }, [currentYear, currentMonth])

    const goToPrevMonth = () => {
        setCurrentDate((prev) => {
            const newDate = new Date(prev)
            newDate.setMonth(newDate.getMonth() - 1)
            return newDate
        })
    }

    const goToNextMonth = () => {
        setCurrentDate((prev) => {
            const newDate = new Date(prev)
            newDate.setMonth(newDate.getMonth() + 1)
            return newDate
        })
    }

    const getMonthStats = useMemo(() => {
        const totalDays = getCalendarDays.filter((d) => d.isCurrentMonth).length
        const offDays = getCalendarDays.filter((d) => d.isCurrentMonth && d.isOff).length
        const workingDays = totalDays - offDays

        return { totalDays, offDays, workingDays }
    }, [getCalendarDays])

    return (
        <>
            <div className="planner-app">
                {/* Animated Background */}
                <div className="bg-animation">
                    <div className="floating-shapes">
                        <div className="shape"></div>
                        <div className="shape"></div>
                        <div className="shape"></div>
                        <div className="shape"></div>
                        <div className="shape"></div>
                    </div>
                    <div className="gradient-orb"></div>
                    <div className="gradient-orb"></div>
                    <div className="gradient-orb"></div>
                </div>

                <div className="container">
                    {/* Header */}
                    <div className="header">
                        <h1 className="logo">Academic Planner</h1>
                        <p className="subtitle">Class Schedule & Holiday Management</p>
                        <p className="institute-name">Chapainawabganj Polytechnic Institute</p>
                    </div>

                    {/* Planner Section */}
                    <div className="planner-section">
                        {/* Calendar Header */}
                        <div className="calendar-header">
                            <div className="calendar-title">
                                <Calendar size={24} />
                                {monthNames[currentMonth - 1]} {currentYear}
                            </div>
                            <div className="nav-controls">
                                <button className="nav-button" onClick={goToPrevMonth} title="Previous Month">
                                    <ChevronLeft size={20} />
                                </button>
                                <button className="nav-button" onClick={goToNextMonth} title="Next Month">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="calendar-grid">
                            {/* Day Headers */}
                            {dayNames.map((day: string) => (
                                <div key={day} className="day-header">
                                    {day}
                                </div>
                            ))}

                            {/* Calendar Days */}
                            {getCalendarDays.map((dayInfo, index) => {
                                const isSelected =
                                    selectedDate && dayInfo.date.toDateString() === selectedDate.toDateString()

                                let dayClass = "calendar-day"
                                if (!dayInfo.isCurrentMonth) dayClass += " other-month"
                                if (isSelected) dayClass += " selected"

                                if (dayInfo.isCurrentMonth) {
                                    const plannerEntry =
                                        // @ts-ignore
                                        planner[currentYear]?.[currentMonth]?.[dayInfo.day as DaysOfMonth<months>]
                                    const dayOfWeek = dayInfo.date.getDay()
                                    const isWeekendByDefault = dayOfWeek === 5 || dayOfWeek === 6

                                    if (
                                        plannerEntry &&
                                        ((plannerEntry.off && !isWeekendByDefault) ||
                                            (!plannerEntry.off && isWeekendByDefault))
                                    ) {
                                        dayClass += " special-override"
                                    } else if (dayInfo.isOff) {
                                        dayClass += " off-day"
                                    } else {
                                        dayClass += " working-day"
                                    }
                                }

                                return (
                                    <div
                                        key={index}
                                        className={dayClass}
                                        onClick={() => dayInfo.isCurrentMonth && setSelectedDate(dayInfo.date)}
                                    >
                                        <div className="day-number">{dayInfo.day}</div>
                                        {dayInfo.isCurrentMonth && (
                                            <div
                                                className={`day-status ${
                                                    dayInfo.isOff ? "status-off" : "status-working"
                                                }`}
                                            >
                                                {dayInfo.isOff ? "Off" : "Work"}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>

                        {/* Selected Date Information */}
                        {selectedDate && (
                            <div className="selected-date-info">
                                <div className="selected-date-title">
                                    <AlertCircle size={20} />
                                    Selected Date Details
                                </div>
                                <div className="date-details">
                                    <div className="date-detail">
                                        <span className="detail-label">Date:</span>
                                        <span className="detail-value">
                                            {selectedDate.toLocaleDateString("en-US", {
                                                weekday: "long",
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric"
                                            })}
                                        </span>
                                    </div>
                                    <div className="date-detail">
                                        <span className="detail-label">Status:</span>
                                        <span className="detail-value">
                                            {(() => {
                                                const dayInfo = isDayOff(
                                                    selectedDate.getFullYear() as years,
                                                    (selectedDate.getMonth() + 1) as months,
                                                    selectedDate.getDate()
                                                )
                                                return dayInfo.isOff ? "Off Day" : "Working Day"
                                            })()}
                                        </span>
                                    </div>
                                    <div className="date-detail">
                                        <span className="detail-label">Reason:</span>
                                        <span className="detail-value">
                                            {(() => {
                                                const dayInfo = isDayOff(
                                                    selectedDate.getFullYear() as years,
                                                    (selectedDate.getMonth() + 1) as months,
                                                    selectedDate.getDate()
                                                )
                                                return dayInfo.cause
                                            })()}
                                        </span>
                                    </div>
                                    <div className="date-detail">
                                        <span className="detail-label">Day Type:</span>
                                        <span className="detail-value">
                                            {(() => {
                                                const plannerEntry =
                                                    // @ts-ignore
                                                    planner[selectedDate.getFullYear() as years]?.[
                                                        (selectedDate.getMonth() + 1) as months
                                                    ]?.[selectedDate.getDate() as DaysOfMonth<months>]
                                                const dayOfWeek = selectedDate.getDay()
                                                const isWeekendByDefault = dayOfWeek === 5 || dayOfWeek === 6

                                                if (
                                                    plannerEntry &&
                                                    ((plannerEntry.off && !isWeekendByDefault) ||
                                                        (!plannerEntry.off && isWeekendByDefault))
                                                ) {
                                                    return "Special Override"
                                                } else if (plannerEntry) {
                                                    return "Custom Entry"
                                                } else if (isWeekendByDefault) {
                                                    return "Regular Weekend"
                                                } else {
                                                    return "Regular Weekday"
                                                }
                                            })()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Statistics */}
                        <div className="stats-grid">
                            <div className="stat-card stat-total">
                                <div className="stat-number">{getMonthStats.totalDays}</div>
                                <div className="stat-label">Total Days</div>
                            </div>
                            <div className="stat-card stat-working">
                                <div className="stat-number">{getMonthStats.workingDays}</div>
                                <div className="stat-label">Working Days</div>
                            </div>
                            <div className="stat-card stat-off">
                                <div className="stat-number">{getMonthStats.offDays}</div>
                                <div className="stat-label">Off Days</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
