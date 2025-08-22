"use client"

import React, { useState, useEffect } from "react"
import { MessageCircle, Mail, User, Tag, FileText, CheckCircle, XCircle } from "lucide-react"
import styles from "./support.module.css"
import Footer from "@/components/Footer"

export default function SupportPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [captchaVerified, setCaptchaVerified] = useState(false)
    const [captchaWidget, setCaptchaWidget] = useState<string | null>(null)
    const [notification, setNotification] = useState<{
        type: "success" | "error" | null
        message: string
    }>({ type: null, message: "" })
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        category: "",
        subject: "",
        message: ""
    })
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const categories = {
        "": "Select a category",
        feature: "Feature Request",
        general: "General Inquiry",
        bug: "Bug Report"
    }

    // Validation functions
    const validateField = (name: string, value: string): string => {
        switch (name) {
            case "fullName":
                if (value.length < 2) return "Name must be at least 2 characters"
                if (value.length > 100) return "Name must be less than 100 characters"
                if (!/^[a-zA-Z\s]+$/.test(value)) return "Name can only contain letters and spaces"
                return ""
            case "email":
                if (value.length > 255) return "Email must be less than 255 characters"
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email"
                return ""
            case "category":
                if (!["general", "feature", "bug"].includes(value)) return "Please select a valid category"
                return ""
            case "subject":
                if (value.length < 5) return "Subject must be at least 5 characters"
                if (value.length > 200) return "Subject must be less than 200 characters"
                return ""
            case "message":
                if (value.length < 10) return "Message must be at least 10 characters"
                if (value.length > 3800) return "Message must be less than 3800 characters"
                return ""
            default:
                return ""
        }
    }

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {}

        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key as keyof typeof formData])
            if (error) newErrors[key] = error
        })

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // Load Cloudflare Turnstile
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
        script.async = true
        script.defer = true
        document.head.appendChild(script)

        script.onload = () => {
            if (window.turnstile) {
                const widget = window.turnstile.render("#cf-turnstile", {
                    sitekey: process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY,
                    callback: function (_: string) {
                        setCaptchaVerified(true)
                    },
                    "expired-callback": function () {
                        setCaptchaVerified(false)
                    },
                    "error-callback": function () {
                        setCaptchaVerified(false)
                    }
                })
                setCaptchaWidget(widget)
            }
        }

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script)
            }
        }
    }, [])

    // Auto-hide notification after 7 seconds
    useEffect(() => {
        if (notification.type) {
            const timer = setTimeout(() => {
                setNotification({ type: null, message: "" })
            }, 7000)
            return () => clearTimeout(timer)
        }
    }, [notification])

    const showNotification = (type: "success" | "error", message: string) => {
        setNotification({ type, message })
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: ""
            }))
        }

        // Real-time validation for better UX
        const error = validateField(name, value)
        if (error) {
            setErrors((prev) => ({
                ...prev,
                [name]: error
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            showNotification("error", "Please fix the validation errors below")
            return
        }

        if (!captchaVerified) {
            showNotification("error", "Please complete the captcha verification")
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/support`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    category: formData.category,
                    subject: formData.subject,
                    message: formData.message
                })
            })

            if (response.ok) {
                showNotification(
                    "success",
                    "Support request submitted successfully! We'll get back to you within 24 hours."
                )
                // Reset form
                setFormData({
                    fullName: "",
                    email: "",
                    category: "",
                    subject: "",
                    message: ""
                })
                setErrors({})
                setCaptchaVerified(false)
                if (window.turnstile && captchaWidget) {
                    window.turnstile.reset(captchaWidget)
                }
            } else {
                const errorData = await response.json().catch(() => ({}))
                showNotification("error", errorData.message || "Failed to submit support request. Please try again.")
            }
        } catch (error) {
            console.error("Support form submission error:", error)
            showNotification("error", "Network error. Please check your connection and try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <div className={styles.container}>
                {/* Notification */}
                {notification.type && (
                    <div className={`${styles.notification} ${styles[notification.type]}`}>
                        <div className={styles.notificationContent}>
                            {notification.type === "success" ? <CheckCircle size={20} /> : <XCircle size={20} />}
                            <span>{notification.message}</span>
                            <button
                                className={styles.notificationClose}
                                onClick={() => setNotification({ type: null, message: "" })}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}

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

                <div className={styles.mainContent}>
                    {/* Main Content Grid */}
                    <div className={styles.contentGrid}>
                        {/* Contact Form */}
                        <div className={styles.formSection}>
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <MessageCircle className={styles.cardIcon} />
                                    <h2 className={styles.cardTitle}>Contact Support</h2>
                                </div>

                                <form onSubmit={handleSubmit} className={styles.form}>
                                    {/* Full Name */}
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>
                                            <User size={18} />
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
                                            placeholder="Enter your full name"
                                            minLength={2}
                                            maxLength={100}
                                            pattern="^[a-zA-Z\s]+$"
                                            required
                                        />
                                        {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
                                    </div>

                                    {/* Email Address */}
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>
                                            <Mail size={18} />
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                                            placeholder="Enter your email address"
                                            maxLength={255}
                                            required
                                        />
                                        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                                    </div>

                                    {/* Category */}
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>
                                            <Tag size={18} />
                                            Category
                                        </label>
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            className={`${styles.select} ${errors.category ? styles.inputError : ""}`}
                                            required
                                        >
                                            {Object.entries(categories).map(([value, label]) => (
                                                <option key={value} value={value}>
                                                    {label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.category && <span className={styles.errorText}>{errors.category}</span>}
                                    </div>

                                    {/* Subject */}
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>
                                            <FileText size={18} />
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className={`${styles.input} ${errors.subject ? styles.inputError : ""}`}
                                            placeholder="Brief description of your issue"
                                            minLength={5}
                                            maxLength={200}
                                            required
                                        />
                                        {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
                                    </div>

                                    {/* Message */}
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>
                                            <MessageCircle size={18} />
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={6}
                                            className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                                            placeholder="Describe your issue in detail..."
                                            minLength={10}
                                            maxLength={3800}
                                            required
                                        />
                                        <div className={styles.characterCount}>{formData.message.length}/3800</div>
                                        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                                    </div>

                                    {/* Cloudflare Turnstile */}
                                    <div className={styles.captchaContainer}>
                                        <div id="cf-turnstile" className={styles.captcha}></div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !captchaVerified}
                                        className={styles.submitButton}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className={styles.spinner}></div>
                                                Submitting...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
