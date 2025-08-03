import ThemeToggle from "@/components/ThemeToggle"
import type { Metadata } from "next"
import "./style.css"

export const metadata: Metadata = {
    title: "Credits - CNPI Routine",
    openGraph: {
        siteName: "CNPI Routine",
        type: "website",
        title: "Credits - CNPI Routine"
    }
}

export default function CreditsPage() {
    return (
        <>
            <ThemeToggle />
            <div className="credits-container">
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
                        <h1 className="logo">Credits & Acknowledgments</h1>
                        <p className="subtitle">Built with passion and dedication</p>
                    </div>

                    {/* Main Content */}
                    <div className="credits-content">
                        {/* Website Designer */}
                        <div className="section">
                            <h2 className="section-title">Website Design & Development</h2>
                            <div className="contributors-list">
                                <div className="contributor-simple">
                                    <span className="contributor-name">Omar Faruk</span>
                                    <span className="contributor-dash">-</span>
                                    <span className="contributor-work">Full Stack Developer</span>
                                </div>
                            </div>
                        </div>

                        {/* Special Thanks */}
                        <div className="section">
                            <h2 className="section-title">Special Thanks</h2>
                            <div className="thanks-card">
                                <p>
                                    We extend our heartfelt gratitude to all the individuals and organizations who have
                                    contributed to making this project possible. Your support, feedback, and
                                    encouragement have been invaluable in bringing this vision to life.
                                </p>

                                <div className="contributors-list">
                                    <div className="contributor-simple">
                                        <span className="contributor-name">Md Biplob Ahmed</span>
                                        <span className="contributor-dash">-</span>
                                        <span className="contributor-work">
                                            Contributed to data collection and beta testing
                                        </span>
                                    </div>
                                    <div className="contributor-simple">
                                        <span className="contributor-name">Md Sujon Ali</span>
                                        <span className="contributor-dash">-</span>
                                        <span className="contributor-work">
                                            Contributed to data collection and beta testing
                                        </span>
                                    </div>
                                    <div className="contributor-simple">
                                        <span className="contributor-name">Md Ahad Ali</span>
                                        <span className="contributor-dash">-</span>
                                        <span className="contributor-work">
                                            Contributed to data collection and beta testing
                                        </span>
                                    </div>
                                    <div className="contributor-simple">
                                        <span className="contributor-name">Md Ripon Islam</span>
                                        <span className="contributor-dash">-</span>
                                        <span className="contributor-work">
                                            Provided inspiration and motivation for this project
                                        </span>
                                    </div>
                                    <div className="contributor-simple">
                                        <span className="contributor-name">Firoja Khatun</span>
                                        <span className="contributor-dash">-</span>
                                        <span className="contributor-work">Helped with beta testing and feedback</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="section">
                            <h2 className="section-title">Technologies & Libraries</h2>
                            <div className="tech-grid">
                                {/* Runtime & Package Manager */}
                                <div className="tech-category">
                                    <h3>Runtime & Package Manager</h3>
                                    <div className="tech-item">
                                        <span className="tech-icon">🟢</span>
                                        <span className="tech-name">Node.js</span>
                                        <span className="tech-version">v24.4.1</span>
                                    </div>
                                    <div className="tech-item">
                                        <span className="tech-icon">📦</span>
                                        <span className="tech-name">pnpm</span>
                                        <span className="tech-version">v10.14.0</span>
                                    </div>
                                    <div className="tech-item">
                                        <span className="tech-icon">🔷</span>
                                        <span className="tech-name">TypeScript</span>
                                        <span className="tech-version">5.8.3</span>
                                    </div>
                                </div>

                                {/* Frontend Framework */}
                                <div className="tech-category">
                                    <h3>Frontend Framework</h3>
                                    <div className="tech-item">
                                        <span className="tech-icon">⚛️</span>
                                        <span className="tech-name">React</span>
                                        <span className="tech-version">19.1.1</span>
                                    </div>
                                    <div className="tech-item">
                                        <span className="tech-icon">⚛️</span>
                                        <span className="tech-name">React DOM</span>
                                        <span className="tech-version">19.1.1</span>
                                    </div>
                                    <div className="tech-item">
                                        <span className="tech-icon">▲</span>
                                        <span className="tech-name">Next.js</span>
                                        <span className="tech-version">15.4.5</span>
                                    </div>
                                </div>

                                {/* Backend & Database */}
                                <div className="tech-category">
                                    <h3>Backend & Database</h3>
                                    <div className="tech-item">
                                        <span className="tech-icon">⚡</span>
                                        <span className="tech-name">Fastify</span>
                                        <span className="tech-version">5.4.0</span>
                                    </div>
                                    <div className="tech-item">
                                        <span className="tech-icon">🗄️</span>
                                        <span className="tech-name">Drizzle ORM</span>
                                        <span className="tech-version">0.44.3</span>
                                    </div>
                                    <div className="tech-item">
                                        <span className="tech-icon">🐘</span>
                                        <span className="tech-name">PostgreSQL</span>
                                        <span className="tech-version">17.5</span>
                                    </div>
                                </div>

                                {/* Utilities */}
                                <div className="tech-category">
                                    <h3>Utilities & Libraries</h3>
                                    <div className="tech-item">
                                        <span className="tech-icon">📄</span>
                                        <span className="tech-name">jsPDF</span>
                                        <span className="tech-version">3.0.1</span>
                                    </div>
                                    <div className="tech-item">
                                        <span className="tech-icon">🎨</span>
                                        <span className="tech-name">Lucide React</span>
                                        <span className="tech-version">0.536.0</span>
                                    </div>
                                    <div className="tech-item">
                                        <span className="tech-icon">🆔</span>
                                        <span className="tech-name">UUID</span>
                                        <span className="tech-version">11.1.0</span>
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="tech-category">
                                    <h3>Services & Fonts</h3>
                                    <div className="tech-item">
                                        <span className="tech-icon">🚀</span>
                                        <span className="tech-name">Netlify</span>
                                        <span className="tech-version">Hosting Platform</span>
                                    </div>
                                    <div className="tech-item">
                                        <span className="tech-icon">🔤</span>
                                        <span className="tech-name">Google Fonts</span>
                                        <span className="tech-version">Font Service</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* License */}
                        <div className="section">
                            <h2 className="section-title">License</h2>
                            <div className="contributors-list">
                                <div className="contributor-simple">
                                    <span className="contributor-name">MIT License</span>
                                    <span className="contributor-work">
                                        This project is open source and available under the MIT License. You are free to
                                        use, modify, and distribute this software in accordance with the license terms.
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Contact & Support */}
                        <div className="section">
                            <h2 className="section-title">Contact & Support</h2>
                            <div className="contact-grid">
                                <div className="contact-item">
                                    <span className="contact-icon">🐛</span>
                                    <div className="contact-info">
                                        <h4>Issues & Bug Reports</h4>
                                        <a
                                            href="https://github.com/xcfio/cnpi-routine/issues"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            github.com/xcfio/cnpi-routine/issues
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <span className="contact-icon">💬</span>
                                    <div className="contact-info">
                                        <h4>Community Discord</h4>
                                        <a
                                            href="https://discord.com/invite/FaCCaFM74Q"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            discord.com/invite/FaCCaFM74Q
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <span className="contact-icon">📧</span>
                                    <div className="contact-info">
                                        <h4>Direct Contact</h4>
                                        <a href="mailto:omarfaruksxp@gmail.com">omarfaruksxp@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
