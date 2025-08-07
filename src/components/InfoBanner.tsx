"use client"

import { useState, useEffect } from "react"
import { X, Info, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react"

interface InfoBannerProps {
    type?: "info" | "success" | "warning" | "error"
    message: string
    actionText?: string
    onAction?: () => void
    autoHide?: false | number
}

export default function InfoBanner({
    type = "info",
    message,
    actionText,
    onAction,
    autoHide = false
}: InfoBannerProps) {
    const [isVisible, setIsVisible] = useState(true)
    const bannerConfig = {
        info: {
            icon: Info,
            className: "info-banner-info"
        },
        success: {
            icon: CheckCircle,
            className: "info-banner-success"
        },
        warning: {
            icon: AlertTriangle,
            className: "info-banner-warning"
        },
        error: {
            icon: AlertCircle,
            className: "info-banner-error"
        }
    }

    const config = bannerConfig[type]
    const IconComponent = config.icon

    // Auto-hide functionality
    useEffect(() => {
        if (typeof autoHide === "number") {
            const timer = setTimeout(() => {
                setIsVisible(false)
            }, autoHide)

            return () => clearTimeout(timer)
        }
    }, [autoHide])

    const handleAction = () => {
        if (onAction) {
            onAction()
        }
    }

    const handleClose = () => {
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <>
            {/* Banner */}
            <div className={`info-banner ${config.className}`} role="banner" aria-live="polite">
                <div className="info-banner-container">
                    <div className="info-banner-content">
                        {/* Left side - Icon and Message */}
                        <div className="info-banner-left">
                            <IconComponent className="info-banner-icon" aria-hidden="true" />
                            <p className="info-banner-message">{message}</p>
                        </div>

                        {/* Right side - Action Button and Close */}
                        <div className="info-banner-right">
                            {actionText && (
                                <button onClick={handleAction} className="info-banner-action">
                                    {actionText} →
                                </button>
                            )}

                            <button onClick={handleClose} className="info-banner-close" aria-label="Close banner">
                                <X className="info-banner-close-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Body padding compensation */}
            <div className="info-banner-spacer" aria-hidden="true" />

            <style jsx>{`
                /* Base Banner Styles */
                .info-banner {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-bottom: 1px solid;
                }

                .info-banner-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                .info-banner-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.75rem 0;
                    gap: 1rem;
                }

                .info-banner-left {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    flex: 1;
                    min-width: 0;
                }

                .info-banner-icon {
                    width: 1.25rem;
                    height: 1.25rem;
                    flex-shrink: 0;
                }

                .info-banner-message {
                    font-size: 0.875rem;
                    font-weight: 500;
                    line-height: 1.4;
                    margin: 0;
                }

                .info-banner-right {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    flex-shrink: 0;
                }

                .info-banner-action {
                    font-size: 0.875rem;
                    font-weight: 600;
                    background: none;
                    border: none;
                    color: inherit;
                    cursor: pointer;
                    text-decoration: none;
                    padding: 0.25rem 0;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                }

                .info-banner-action:hover {
                    text-decoration: underline;
                }

                .info-banner-action:focus {
                    outline: none;
                    text-decoration: underline;
                }

                .info-banner-close {
                    background: none;
                    border: none;
                    color: inherit;
                    cursor: pointer;
                    padding: 0.25rem;
                    border-radius: 50%;
                    transition: all 0.2s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .info-banner-close:hover {
                    opacity: 0.75;
                    transform: scale(1.1);
                }

                .info-banner-close:focus {
                    outline: none;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
                    border-radius: 50%;
                }

                .info-banner-close-icon {
                    width: 1rem;
                    height: 1rem;
                }

                .info-banner-spacer {
                    height: 3rem;
                }

                /* Info Banner Type */
                .info-banner-info {
                    background: rgba(239, 246, 255, 0.95);
                    border-color: rgba(191, 219, 254, 0.8);
                    color: #1e40af;
                }

                .info-banner-info .info-banner-icon {
                    color: #3b82f6;
                }

                .info-banner-info .info-banner-close {
                    color: #3b82f6;
                }

                /* Success Banner Type */
                .info-banner-success {
                    background: rgba(236, 253, 245, 0.95);
                    border-color: rgba(167, 243, 208, 0.8);
                    color: #065f46;
                }

                .info-banner-success .info-banner-icon {
                    color: #10b981;
                }

                .info-banner-success .info-banner-close {
                    color: #10b981;
                }

                /* Warning Banner Type */
                .info-banner-warning {
                    background: rgba(255, 251, 235, 0.95);
                    border-color: rgba(253, 230, 138, 0.8);
                    color: #92400e;
                }

                .info-banner-warning .info-banner-icon {
                    color: #f59e0b;
                }

                .info-banner-warning .info-banner-close {
                    color: #f59e0b;
                }

                /* Error Banner Type */
                .info-banner-error {
                    background: rgba(254, 242, 242, 0.95);
                    border-color: rgba(252, 165, 165, 0.8);
                    color: #991b1b;
                }

                .info-banner-error .info-banner-icon {
                    color: #ef4444;
                }

                .info-banner-error .info-banner-close {
                    color: #ef4444;
                }

                /* Dark Mode Support */
                @media (prefers-color-scheme: dark) {
                    .info-banner-info {
                        background: rgba(30, 58, 138, 0.2);
                        border-color: rgba(30, 64, 175, 0.8);
                        color: #93c5fd;
                    }

                    .info-banner-info .info-banner-icon {
                        color: #60a5fa;
                    }

                    .info-banner-info .info-banner-close {
                        color: #60a5fa;
                    }

                    .info-banner-success {
                        background: rgba(6, 95, 70, 0.2);
                        border-color: rgba(6, 120, 95, 0.8);
                        color: #86efac;
                    }

                    .info-banner-success .info-banner-icon {
                        color: #34d399;
                    }

                    .info-banner-success .info-banner-close {
                        color: #34d399;
                    }

                    .info-banner-warning {
                        background: rgba(146, 64, 14, 0.2);
                        border-color: rgba(180, 83, 9, 0.8);
                        color: #fcd34d;
                    }

                    .info-banner-warning .info-banner-icon {
                        color: #fbbf24;
                    }

                    .info-banner-warning .info-banner-close {
                        color: #fbbf24;
                    }

                    .info-banner-error {
                        background: rgba(153, 27, 27, 0.2);
                        border-color: rgba(185, 28, 28, 0.8);
                        color: #fca5a5;
                    }

                    .info-banner-error .info-banner-icon {
                        color: #f87171;
                    }

                    .info-banner-error .info-banner-close {
                        color: #f87171;
                    }
                }

                /* Mobile Responsive */
                @media (max-width: 640px) {
                    .info-banner-container {
                        padding: 0 0.75rem;
                    }

                    .info-banner-content {
                        flex-direction: column;
                        gap: 0.75rem;
                        padding: 0.75rem 0;
                        text-align: center;
                    }

                    .info-banner-left {
                        justify-content: center;
                    }

                    .info-banner-right {
                        gap: 0.5rem;
                    }

                    .info-banner-message {
                        white-space: normal;
                        text-align: center;
                    }

                    .info-banner-spacer {
                        height: 4rem;
                    }
                }

                /* Extra small devices */
                @media (max-width: 480px) {
                    .info-banner-container {
                        padding: 0 0.5rem;
                    }

                    .info-banner-content {
                        gap: 0.5rem;
                        padding: 0.5rem 0;
                    }

                    .info-banner-left {
                        gap: 0.5rem;
                    }

                    .info-banner-message {
                        font-size: 0.8rem;
                    }

                    .info-banner-action {
                        font-size: 0.8rem;
                    }
                }

                /* High contrast mode support */
                @media (prefers-contrast: high) {
                    .info-banner {
                        border-bottom-width: 2px;
                    }

                    .info-banner-info {
                        background: #e0f2fe;
                        border-color: #0277bd;
                        color: #01579b;
                    }

                    .info-banner-success {
                        background: #e8f5e8;
                        border-color: #2e7d32;
                        color: #1b5e20;
                    }

                    .info-banner-warning {
                        background: #fff3e0;
                        border-color: #f57c00;
                        color: #e65100;
                    }

                    .info-banner-error {
                        background: #ffebee;
                        border-color: #d32f2f;
                        color: #b71c1c;
                    }
                }

                /* Reduced motion support */
                @media (prefers-reduced-motion: reduce) {
                    .info-banner-action {
                        transition: none;
                    }
                }

                /* Focus visible support */
                @supports selector(:focus-visible) {
                    .info-banner-close:focus {
                        box-shadow: none;
                    }

                    .info-banner-close:focus-visible {
                        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
                    }

                    .info-banner-action:focus {
                        text-decoration: none;
                    }

                    .info-banner-action:focus-visible {
                        text-decoration: underline;
                    }
                }
            `}</style>
        </>
    )
}
