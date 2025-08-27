"use client"
import { useState, useEffect } from "react"
import { Github, MessageCircle, Moon, Sun, HelpCircle, Star, Calendar } from "lucide-react"
import "./Footer.css"

export default function Footer() {
    const [isLight, setIsLight] = useState(false)

    useEffect(() => {
        // Check if there's a saved theme preference
        const savedTheme = localStorage.getItem("theme")
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches

        const shouldBeLight = savedTheme === "light" || (!savedTheme && prefersLight)
        setIsLight(shouldBeLight)

        if (shouldBeLight) {
            document.body.setAttribute("data-theme", "light")
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !isLight
        setIsLight(newTheme)

        if (newTheme) {
            document.body.setAttribute("data-theme", "light")
            localStorage.setItem("theme", "light")
        } else {
            document.body.removeAttribute("data-theme")
            localStorage.setItem("theme", "dark")
        }
    }

    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-info">
                            <h3 className="footer-title">
                                <a href="/">Class Routine</a>
                            </h3>
                            <p className="footer-description">
                                Academic Schedule Management System for Chapainawabganj Polytechnic Institute
                            </p>
                        </div>

                        <div className="footer-links">
                            <div className="footer-section">
                                <h4>Quick Links</h4>
                                <div className="quick-links">
                                    <a href="/planner" className="quick-link" aria-label="Get Support">
                                        <Calendar size={20} />
                                        Planner
                                    </a>
                                    <a href="/support" className="quick-link" aria-label="Get Support">
                                        <HelpCircle size={20} />
                                        Support
                                    </a>
                                    <a href="/credits" className="quick-link" aria-label="View Credits">
                                        <Star size={20} />
                                        Credits
                                    </a>
                                </div>
                            </div>

                            <div className="footer-section">
                                <h4>Connect</h4>
                                <div className="social-links">
                                    <a
                                        href="https://github.com/xcfio/cnpi-routine"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label="GitHub Repository"
                                    >
                                        <Github size={20} />
                                        GitHub
                                    </a>

                                    <a
                                        href="https://discord.com/invite/FaCCaFM74Q"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label="Discord Server"
                                    >
                                        <MessageCircle size={20} />
                                        Discord
                                    </a>
                                </div>
                            </div>

                            <div className="footer-section">
                                <h4>Theme</h4>
                                <button
                                    onClick={toggleTheme}
                                    className="theme-toggle-button"
                                    aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
                                >
                                    {isLight ? <Moon size={18} /> : <Sun size={18} />}
                                    <span className="theme-text">{isLight ? "Dark Mode" : "Light Mode"}</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} Omar Faruk. See{" "}
                            <a href="/credits" className="footer-link">
                                Credits
                            </a>
                            {" for more information"}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
