export const html = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Chapainawabganj Polytechnic Institute - Class Routine</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
            rel="stylesheet"
        />
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :root {
                --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                --success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                --danger-gradient: linear-gradient(135deg, #fa709a 0%, #fee140 100%);

                /* Light mode */
                --bg-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                --bg-secondary: #ffffff;
                --bg-card: rgba(255, 255, 255, 0.95);
                --text-primary: #2d3748;
                --text-secondary: #4a5568;
                --text-muted: #718096;
                --border-color: rgba(226, 232, 240, 0.8);
                --shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                --input-bg: #ffffff;
                --input-border: #e2e8f0;
            }

            [data-theme="dark"] {
                --bg-primary: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
                --bg-secondary: #1a202c;
                --bg-card: rgba(45, 55, 72, 0.95);
                --text-primary: #f7fafc;
                --text-secondary: #e2e8f0;
                --text-muted: #a0aec0;
                --border-color: rgba(74, 85, 104, 0.8);
                --shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                --input-bg: #2d3748;
                --input-border: #4a5568;
            }

            body {
                font-family: "Inter", sans-serif;
                background: var(--bg-primary);
                min-height: 100vh;
                color: var(--text-primary);
                transition: all 0.3s ease;
                position: relative;
                overflow-x: hidden;
            }

            /* Animated Background */
            .bg-animation {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                overflow: hidden;
            }

            .floating-shapes {
                position: absolute;
                width: 100%;
                height: 100%;
            }

            .shape {
                position: absolute;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                animation: float 20s infinite linear;
            }

            .shape:nth-child(1) {
                width: 80px;
                height: 80px;
                left: 10%;
                animation-delay: 0s;
                animation-duration: 25s;
            }

            .shape:nth-child(2) {
                width: 120px;
                height: 120px;
                left: 20%;
                animation-delay: 5s;
                animation-duration: 30s;
            }

            .shape:nth-child(3) {
                width: 60px;
                height: 60px;
                left: 70%;
                animation-delay: 10s;
                animation-duration: 20s;
            }

            .shape:nth-child(4) {
                width: 100px;
                height: 100px;
                left: 80%;
                animation-delay: 15s;
                animation-duration: 35s;
            }

            .shape:nth-child(5) {
                width: 40px;
                height: 40px;
                left: 50%;
                animation-delay: 20s;
                animation-duration: 15s;
            }

            @keyframes float {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }

            /* Gradient orbs */
            .gradient-orb {
                position: absolute;
                border-radius: 50%;
                filter: blur(60px);
                opacity: 0.3;
                animation: pulse 4s ease-in-out infinite;
            }

            .gradient-orb:nth-child(1) {
                width: 300px;
                height: 300px;
                background: linear-gradient(45deg, #667eea, #764ba2);
                top: 20%;
                left: 10%;
                animation-delay: 0s;
            }

            .gradient-orb:nth-child(2) {
                width: 200px;
                height: 200px;
                background: linear-gradient(45deg, #f093fb, #f5576c);
                top: 60%;
                right: 10%;
                animation-delay: 2s;
            }

            .gradient-orb:nth-child(3) {
                width: 250px;
                height: 250px;
                background: linear-gradient(45deg, #4facfe, #00f2fe);
                bottom: 20%;
                left: 30%;
                animation-delay: 1s;
            }

            @keyframes pulse {
                0%,
                100% {
                    transform: scale(1);
                    opacity: 0.3;
                }
                50% {
                    transform: scale(1.2);
                    opacity: 0.5;
                }
            }

            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 2rem;
                min-height: 100vh;
                position: relative;
                z-index: 1;
            }

            .header {
                text-align: center;
                margin-bottom: 3rem;
                animation: fadeInUp 1s ease;
            }

            .logo {
                font-size: 3.5rem;
                font-weight: 700;
                background: linear-gradient(135deg, #ffffff 0%, #f0f8ff 50%, #ffffff 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 0.5rem;
                text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
                animation: glow 2s ease-in-out infinite alternate;
            }

            @keyframes glow {
                from {
                    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
                }
                to {
                    text-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
                }
            }

            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .subtitle {
                color: rgba(255, 255, 255, 0.9);
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
                font-weight: 500;
            }

            .institute-name {
                color: rgba(255, 255, 255, 0.8);
                font-size: 1rem;
                font-weight: 400;
            }

            .theme-toggle {
                position: absolute;
                top: 2rem;
                right: 2rem;
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: 50px;
                padding: 0.8rem;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: var(--shadow);
                z-index: 10;
                font-size: 1.2rem;
            }

            .theme-toggle:hover {
                transform: scale(1.1);
            }

            .form-section {
                background: var(--bg-card);
                border-radius: 20px;
                padding: 2.5rem;
                box-shadow: var(--shadow);
                border: 1px solid var(--border-color);
                backdrop-filter: blur(10px);
                margin-bottom: 2rem;
                animation: fadeInUp 1s ease 0.3s both;
            }

            .form-title {
                font-size: 1.8rem;
                font-weight: 600;
                margin-bottom: 2rem;
                text-align: center;
                color: var(--text-primary);
            }

            .form-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1.5rem;
                margin-bottom: 2rem;
            }

            .form-group {
                position: relative;
            }

            .form-label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 500;
                color: var(--text-secondary);
                font-size: 0.9rem;
            }

            .form-select {
                width: 100%;
                padding: 0.75rem 1rem;
                border: 2px solid var(--input-border);
                border-radius: 10px;
                background: var(--input-bg);
                color: var(--text-primary);
                font-size: 1rem;
                font-family: "Inter", sans-serif;
                transition: all 0.3s ease;
                cursor: pointer;
                appearance: none;
                background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right 1rem center;
                background-size: 1rem;
            }

            .form-select:focus {
                outline: none;
                border-color: #667eea;
                box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            }

            .form-select:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }

            .btn {
                padding: 1rem 2rem;
                border: none;
                border-radius: 12px;
                font-size: 1rem;
                font-weight: 600;
                font-family: "Inter", sans-serif;
                cursor: pointer;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                position: relative;
                overflow: hidden;
            }

            .btn-primary {
                background: var(--primary-gradient);
                color: white;
                width: 100%;
            }

            .btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            }

            .btn:active {
                transform: translateY(0);
            }

            .btn:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                transform: none;
            }

            .loading {
                display: inline-block;
                width: 20px;
                height: 20px;
                border: 3px solid rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                border-top-color: #fff;
                animation: spin 1s ease-in-out infinite;
                margin-right: 0.5rem;
            }

            @keyframes spin {
                to {
                    transform: rotate(360deg);
                }
            }

            .result-section {
                background: var(--bg-card);
                border-radius: 20px;
                padding: 2.5rem;
                box-shadow: var(--shadow);
                border: 1px solid var(--border-color);
                backdrop-filter: blur(10px);
                display: none;
                animation: slideIn 0.5s ease;
            }

            .result-section.show {
                display: block;
            }

            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .result-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 2rem;
                flex-wrap: wrap;
                gap: 1rem;
            }

            .result-title {
                font-size: 1.5rem;
                font-weight: 600;
                color: var(--text-primary);
            }

            .result-info {
                font-size: 0.9rem;
                color: var(--text-muted);
                font-family: "JetBrains Mono", monospace;
            }

            .download-buttons {
                display: flex;
                gap: 1rem;
            }

            .btn-secondary {
                background: var(--secondary-gradient);
                color: white;
                padding: 0.6rem 1.2rem;
                font-size: 0.9rem;
            }

            .btn-success {
                background: var(--success-gradient);
                color: white;
                padding: 0.6rem 1.2rem;
                font-size: 0.9rem;
            }

            .routine-table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 1rem;
                background: var(--input-bg);
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .routine-table th,
            .routine-table td {
                padding: 1rem;
                text-align: left;
                border-bottom: 1px solid var(--border-color);
            }

            .routine-table th {
                background: var(--primary-gradient);
                color: white;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                font-size: 0.9rem;
            }

            .routine-table tr:hover {
                background: rgba(102, 126, 234, 0.05);
            }

            .routine-table tr:last-child td {
                border-bottom: none;
            }

            .class-time {
                font-family: "JetBrains Mono", monospace;
                font-weight: 500;
                color: var(--text-primary);
            }

            .subject-name {
                font-weight: 500;
                color: var(--text-primary);
            }

            .teacher-name {
                color: var(--text-secondary);
                font-size: 0.9rem;
            }

            .classroom {
                background: var(--primary-gradient);
                color: white;
                padding: 0.3rem 0.6rem;
                border-radius: 6px;
                font-size: 0.8rem;
                font-weight: 500;
                display: inline-block;
            }

            .teacher-list {
                margin-top: 2rem;
                background: var(--input-bg);
                border-radius: 10px;
                padding: 1.5rem;
            }

            .teacher-list h3 {
                margin-bottom: 1rem;
                color: var(--text-primary);
                font-size: 1.2rem;
            }

            .teacher-card {
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: 8px;
                padding: 1rem;
                margin-bottom: 1rem;
                transition: all 0.3s ease;
            }

            .teacher-card:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }

            .teacher-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 1rem;
            }

            .teacher-details h4 {
                margin-bottom: 0.3rem;
                color: var(--text-primary);
            }

            .teacher-details p {
                color: var(--text-secondary);
                font-size: 0.9rem;
                margin-bottom: 0.2rem;
            }

            .subject-badge {
                background: var(--success-gradient);
                color: white;
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 500;
            }

            .error-message {
                background: rgba(229, 62, 62, 0.1);
                border: 1px solid rgba(229, 62, 62, 0.3);
                color: #e53e3e;
                padding: 1rem;
                border-radius: 10px;
                margin-top: 1rem;
                text-align: center;
            }

            /* Mobile Optimizations */
            @media (max-width: 768px) {
                .container {
                    padding: 1rem;
                }

                .theme-toggle {
                    top: 1rem;
                    right: 1rem;
                    padding: 0.6rem;
                    font-size: 1rem;
                }

                .logo {
                    font-size: 2.5rem;
                }

                .subtitle {
                    font-size: 1rem;
                }

                .institute-name {
                    font-size: 0.9rem;
                }

                .form-section {
                    padding: 1.5rem;
                    border-radius: 15px;
                }

                .form-title {
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                }

                .form-grid {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }

                .form-select {
                    padding: 0.8rem 1rem;
                    font-size: 0.95rem;
                }

                .btn {
                    padding: 0.9rem 1.5rem;
                    font-size: 0.95rem;
                }

                .result-section {
                    padding: 1.5rem;
                    border-radius: 15px;
                }

                .result-header {
                    flex-direction: column;
                    align-items: stretch;
                    gap: 1.5rem;
                }

                .result-title {
                    font-size: 1.3rem;
                    text-align: center;
                }

                .result-info {
                    text-align: center;
                    font-size: 0.8rem;
                }

                .download-buttons {
                    justify-content: center;
                    gap: 0.8rem;
                }

                .btn-secondary,
                .btn-success {
                    padding: 0.7rem 1rem;
                    font-size: 0.85rem;
                    flex: 1;
                    text-align: center;
                }

                /* Mobile Table Optimizations */
                .routine-table {
                    font-size: 0.85rem;
                    display: block;
                    overflow-x: auto;
                    white-space: nowrap;
                    -webkit-overflow-scrolling: touch;
                }

                .routine-table thead,
                .routine-table tbody,
                .routine-table th,
                .routine-table td,
                .routine-table tr {
                    display: block;
                }

                .routine-table thead tr {
                    position: absolute;
                    top: -9999px;
                    left: -9999px;
                }

                .routine-table tr {
                    background: var(--input-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    margin-bottom: 0.8rem;
                    padding: 1rem;
                    display: block;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .routine-table td {
                    border: none;
                    padding: 0.5rem 0;
                    text-align: left;
                    white-space: normal;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .routine-table td:before {
                    content: attr(data-label);
                    font-weight: 600;
                    color: var(--text-secondary);
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    flex-shrink: 0;
                    margin-right: 1rem;
                    min-width: 80px;
                }

                .class-time {
                    font-size: 0.85rem;
                }

                .classroom {
                    font-size: 0.75rem;
                    padding: 0.25rem 0.5rem;
                }

                .teacher-info {
                    flex-direction: column;
                    align-items: stretch;
                    text-align: center;
                }

                .teacher-list {
                    padding: 1rem;
                }

                .teacher-card {
                    padding: 0.8rem;
                }

                /* Gradient orbs mobile adjustment */
                .gradient-orb:nth-child(1) {
                    width: 200px;
                    height: 200px;
                }

                .gradient-orb:nth-child(2) {
                    width: 150px;
                    height: 150px;
                }

                .gradient-orb:nth-child(3) {
                    width: 180px;
                    height: 180px;
                }

                /* Floating shapes mobile adjustment */
                .shape:nth-child(1),
                .shape:nth-child(2) {
                    width: 60px;
                    height: 60px;
                }

                .shape:nth-child(3),
                .shape:nth-child(4),
                .shape:nth-child(5) {
                    width: 40px;
                    height: 40px;
                }
            }

            /* Extra small mobile devices */
            @media (max-width: 480px) {
                .container {
                    padding: 0.8rem;
                }

                .logo {
                    font-size: 2rem;
                }

                .subtitle {
                    font-size: 0.9rem;
                }

                .form-section,
                .result-section {
                    padding: 1.2rem;
                    border-radius: 12px;
                }

                .form-title {
                    font-size: 1.3rem;
                }

                .form-select {
                    padding: 0.7rem 0.8rem;
                    font-size: 0.9rem;
                }

                .btn {
                    padding: 0.8rem 1.2rem;
                    font-size: 0.9rem;
                }

                .btn-secondary,
                .btn-success {
                    padding: 0.6rem 0.8rem;
                    font-size: 0.8rem;
                }

                .routine-table {
                    font-size: 0.8rem;
                }

                .routine-table tr {
                    padding: 0.8rem;
                    margin-bottom: 0.6rem;
                }

                .routine-table td {
                    padding: 0.4rem 0;
                }

                .routine-table td:before {
                    font-size: 0.75rem;
                    min-width: 70px;
                    margin-right: 0.8rem;
                }

                .teacher-list {
                    padding: 0.8rem;
                }

                .teacher-card {
                    padding: 0.6rem;
                }
            }

            /* Landscape mobile orientation */
            @media (max-width: 768px) and (orientation: landscape) {
                .header {
                    margin-bottom: 1.5rem;
                }

                .logo {
                    font-size: 2rem;
                }

                .form-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0.8rem;
                }

                .container {
                    padding: 0.8rem;
                }
            }
        </style>
    </head>
    <body>
        <!-- Animated Background -->
        <div class="bg-animation">
            <div class="floating-shapes">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <div class="gradient-orb"></div>
            <div class="gradient-orb"></div>
            <div class="gradient-orb"></div>
        </div>

        <!-- Theme Toggle -->
        <div class="theme-toggle" onclick="toggleTheme()">
            <span id="theme-icon">🌙</span>
        </div>

        <div class="container">
            <!-- Header -->
            <div class="header">
                <h1 class="logo">Class Routine</h1>
                <p class="subtitle">Academic Schedule Management</p>
                <p class="institute-name">Chapainawabganj Polytechnic Institute</p>
            </div>

            <!-- Form Section -->
            <div class="form-section">
                <h2 class="form-title">Get Your Class Routine</h2>
                <form id="routineForm">
                    <div class="form-grid">
                        <div class="form-group">
                            <label class="form-label" for="year">Academic Year</label>
                            <select class="form-select" id="year" name="year" required>
                                <option value="">Select Year</option>
                                <option value="2025">2025</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="department">Department</label>
                            <select class="form-select" id="department" name="department" required>
                                <option value="">Select Department</option>
                                <option value="67">67 - Electrical Technology</option>
                                <option value="68">68 - Electronics Technology</option>
                                <option value="69">69 - Food Technology</option>
                                <option value="72">72 - Refrigeration and Air-conditioning Technology</option>
                                <option value="85">85 - Computer Science and Technology</option>
                                <option value="92">92 - Mechatronics Technology</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="semester">Semester</label>
                            <select class="form-select" id="semester" name="semester" required>
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

                        <div class="form-group">
                            <label class="form-label" for="shift">Shift</label>
                            <select class="form-select" id="shift" name="shift" required>
                                <option value="">Select Shift</option>
                                <option value="1">1st Shift (Morning)</option>
                                <option value="2">2nd Shift (Day)</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="group">Group</label>
                            <select class="form-select" id="group" name="group" required>
                                <option value="">Select Group</option>
                                <option value="A">Group A</option>
                                <option value="B">Group B</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary" id="submitBtn">
                        <span id="btn-text">Get Routine</span>
                    </button>
                </form>
            </div>

            <!-- Result Section -->
            <div class="result-section" id="resultSection">
                <div class="result-header">
                    <div>
                        <h3 class="result-title">Class Routine</h3>
                        <p class="result-info" id="routineInfo"></p>
                    </div>
                    <div class="download-buttons">
                        <button class="btn btn-secondary" onclick="downloadJSON()">📄 Download JSON</button>
                        <button class="btn btn-success" onclick="downloadPDF()">📥 Download PDF</button>
                    </div>
                </div>

                <div id="routineContent">
                    <!-- Routine table will be populated here -->
                </div>

                <div class="teacher-list" id="teacherList">
                    <!-- Teacher information will be populated here -->
                </div>
            </div>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
        <script>
            let currentRoutineData = null

            // Theme toggle functionality
            function toggleTheme() {
                const body = document.body
                const themeIcon = document.getElementById("theme-icon")

                if (body.getAttribute("data-theme") === "dark") {
                    body.removeAttribute("data-theme")
                    themeIcon.textContent = "🌙"
                } else {
                    body.setAttribute("data-theme", "dark")
                    themeIcon.textContent = "☀️"
                }
            }

            // Form submission
            document.getElementById("routineForm").addEventListener("submit", async function (e) {
                e.preventDefault()

                const formData = new FormData(this)
                const data = Object.fromEntries(formData.entries())

                // Remove empty group field if not selected
                if (!data.group) {
                    delete data.group
                }

                const submitBtn = document.getElementById("submitBtn")
                const btnText = document.getElementById("btn-text")

                // Show loading state
                submitBtn.disabled = true
                btnText.innerHTML = '<span class="loading"></span>Loading...'

                try {
                    const response = await fetch("/routine", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })

                    const result = await response.json()

                    if (response.ok) {
                        currentRoutineData = result
                        displayRoutine(result, data)
                    } else {
                        showError(result.error || "An error occurred while fetching the routine.")
                    }
                } catch (error) {
                    showError("Failed to connect to the server. Please try again.")
                } finally {
                    // Reset button state
                    submitBtn.disabled = false
                    btnText.textContent = "Get Routine"
                }
            })

            function displayRoutine(data, formData) {
                const resultSection = document.getElementById("resultSection")
                const routineInfo = document.getElementById("routineInfo")
                const routineContent = document.getElementById("routineContent")
                const teacherList = document.getElementById("teacherList")

                // Set routine info
                const deptName = getDepartmentName(formData.department)
                routineInfo.textContent = \`\${deptName} | Semester \${formData.semester} | Shift \${
                    formData.shift
                } | Year \${formData.year}\${formData.group ? \` | Group \${formData.group}\` : ""}\`

                // Create routine table
                let tableHTML = \`
                <table class="routine-table">
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
                \`

                // Populate table with class data
                const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]

                for (const day of days) {
                    if (data.class && data.class[day]) {
                        const dayClasses = data.class[day]
                        let isFirstRow = true

                        for (const period in dayClasses) {
                            const classInfo = dayClasses[period]
                            tableHTML += \`
                            <tr>
                                \${
                                    isFirstRow
                                        ? \`<td rowspan="\${Object.keys(dayClasses).length}"><strong>\${day}</strong></td>\`
                                        : ""
                                }
                                <td class="class-time">\${classInfo.time || period}</td>
                                <td class="subject-name">\${classInfo.subject || ""}</td>
                                <td class="teacher-name">\${classInfo.teacher || ""}</td>
                                <td><span class="classroom">\${classInfo.classroom || "N/A"}</span></td>
                            </tr>
                            \`
                            isFirstRow = false
                        }
                    }
                }

                tableHTML += \`
                    </tbody>
                </table>
                \`

                routineContent.innerHTML = tableHTML

                // Display teacher information
                if (data.teacher && data.teacher.length > 0) {
                    let teacherHTML = "<h3>Teachers</h3>"

                    data.teacher.forEach((item) => {
                        teacherHTML += \`
                        <div class="teacher-card">
                            <div class="teacher-info">
                                <div class="teacher-details">
                                    <h4>\${item.name}</h4>
                                    <p><strong>Designation:</strong> \${item.designation}</p>
                                    <p><strong>Mobile:</strong> \${item.mobile}</p>
                                </div>
                                <div class="subject-badge">
                                    \${item.subject}
                                </div>
                            </div>
                        </div>
                        \`
                    })

                    teacherList.innerHTML = teacherHTML
                } else {
                    teacherList.innerHTML = ""
                }

                // Show result section
                resultSection.classList.add("show")
                resultSection.scrollIntoView({ behavior: "smooth" })
            }

            function getDepartmentName(code) {
                const departments = {
                    67: "Electrical Technology",
                    68: "Electronics Technology",
                    69: "Food Technology",
                    72: "Refrigeration and Air-conditioning Technology",
                    85: "Computer Science and Technology",
                    92: "Mechatronics Technology"
                }
                return departments[code] || "Unknown Department"
            }

            function showError(message) {
                const resultSection = document.getElementById("resultSection")
                const routineContent = document.getElementById("routineContent")
                const teacherList = document.getElementById("teacherList")

                routineContent.innerHTML = \`<div class="error-message">\${message}</div>\`
                teacherList.innerHTML = ""

                document.getElementById("routineInfo").textContent = "Error occurred"
                resultSection.classList.add("show")
                resultSection.scrollIntoView({ behavior: "smooth" })
            }

            function downloadJSON() {
                if (!currentRoutineData) {
                    alert("No routine data available to download.")
                    return
                }

                const dataStr = JSON.stringify(currentRoutineData, null, 4)
                const dataBlob = new Blob([dataStr], { type: "application/json" })
                const url = URL.createObjectURL(dataBlob)

                const link = document.createElement("a")
                link.href = url
                link.download = \`\${currentRoutineData.code}.json\`
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                URL.revokeObjectURL(url)
            }

            function downloadPDF() {
                if (!currentRoutineData) {
                    alert("No routine data available to download.")
                    return
                }

                const { jsPDF } = window.jspdf
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
                const routineInfo = document.getElementById("routineInfo").textContent
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
                    if (currentRoutineData.class && currentRoutineData.class[day]) {
                        const dayClasses = currentRoutineData.class[day]
                        let isFirstRow = true

                        for (const period in dayClasses) {
                            const classInfo = dayClasses[period]
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
                            const subject = classInfo.subject.split('(')[1]?.split(')')[0] || ""
                            doc.text(
                                subject.length > 25 ? subject.substring(0, 22) + "..." : subject,
                                xPosition + 2,
                                yPosition + 7
                            )
                            xPosition += columnWidths[2]

                            // Teacher column
                            doc.rect(xPosition, yPosition, columnWidths[3], 10)
                            const teacher = classInfo.teacher.split('(')[1]?.split(')')[0] || ""
                            doc.text(
                                teacher.length > 20 ? teacher.substring(0, 17) + "..." : teacher,
                                xPosition + 2,
                                yPosition + 7
                            )
                            xPosition += columnWidths[3]

                            // Classroom column
                            doc.rect(xPosition, yPosition, columnWidths[4], 10)
                            doc.text(classInfo.classroom || "", xPosition + 2, yPosition + 7)

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
                if (currentRoutineData.teacher && currentRoutineData.teacher.length > 0) {
                    doc.addPage()
                    yPosition = 20

                    doc.setFontSize(16)
                    doc.setFont("helvetica", "bold")
                    doc.text("Teachers", 105, yPosition, { align: "center" })
                    yPosition += 20

                    doc.setFontSize(10)
                    doc.setFont("helvetica", "normal")

                    currentRoutineData.teacher.forEach((item) => {
                        doc.setFont("helvetica", "bold")
                        doc.text(\`\${item.name}\`, 10, yPosition)
                        yPosition += 5

                        doc.setFont("helvetica", "normal")
                        doc.text(\`Designation: \${item.designation}\`, 10, yPosition)
                        yPosition += 5
                        doc.text(\`Mobile: \${item.mobile}\`, 10, yPosition)
                        yPosition += 5
                        doc.text(\`Subject: \${item.subject}\`, 10, yPosition)
                        yPosition += 10

                        if (yPosition > 280) {
                            doc.addPage()
                            yPosition = 20
                        }
                    })
                }

                // Save the PDF
                doc.save(\`\${currentRoutineData.code}.pdf\`)
            }

            // Auto-detect system theme on page load
            document.addEventListener("DOMContentLoaded", function () {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
                if (prefersDark) {
                    document.body.setAttribute("data-theme", "dark")
                    document.getElementById("theme-icon").textContent = "☀️"
                }
            })

            // Listen for system theme changes
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
                if (!document.body.hasAttribute("data-theme")) {
                    if (e.matches) {
                        document.body.setAttribute("data-theme", "dark")
                        document.getElementById("theme-icon").textContent = "☀️"
                    } else {
                        document.body.removeAttribute("data-theme")
                        document.getElementById("theme-icon").textContent = "🌙"
                    }
                }
            })

            // Add smooth scrolling for better UX
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.addEventListener("click", function (e) {
                    e.preventDefault()
                    const target = document.querySelector(this.getAttribute("href"))
                    if (target) {
                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }
                })
            })

            // Add form validation feedback
            document.querySelectorAll(".form-select").forEach((select) => {
                select.addEventListener("change", function () {
                    this.style.borderColor = this.value ? "#48bb78" : ""
                })
            })

            // Keyboard shortcuts
            document.addEventListener("keydown", function (e) {
                // Ctrl/Cmd + Enter to submit form
                if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                    const form = document.getElementById("routineForm")
                    if (form && !document.getElementById("submitBtn").disabled) {
                        form.dispatchEvent(new Event("submit"))
                    }
                }

                // Ctrl/Cmd + D to download PDF
                if ((e.ctrlKey || e.metaKey) && e.key === "d") {
                    e.preventDefault()
                    if (currentRoutineData) {
                        downloadPDF()
                    }
                }

                // Ctrl/Cmd + J to download JSON
                if ((e.ctrlKey || e.metaKey) && e.key === "j") {
                    e.preventDefault()
                    if (currentRoutineData) {
                        downloadJSON()
                    }
                }

                // Ctrl/Cmd + T to toggle theme
                if ((e.ctrlKey || e.metaKey) && e.key === "t") {
                    e.preventDefault()
                    toggleTheme()
                }
            })
        </script>
    </body>
</html>
`
