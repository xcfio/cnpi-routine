# Class Routine - Next.js Application

[![Code Test](https://github.com/xcfio/cnpi-routine/actions/workflows/test.yaml/badge.svg)](https://github.com/xcfio/cnpi-routine/actions/workflows/test.yaml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/04412ec1-40de-46c3-bf7e-52a102e7f5e0/deploy-status)](https://app.netlify.com/projects/routine-cnpi/deploys)
[![License](https://img.shields.io/github/license/xcfio/cnpi-routine)](https://opensource.org/license/mit)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js Version](https://img.shields.io/badge/Node.js-24.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Time](https://wakatime.com/badge/user/80f5dbf4-7bff-4748-82c6-2a8a3f3ec1c0/project/1d34a36d-70ad-48f6-a48f-ebf12f936819.svg)](https://wakatime.com/badge/user/80f5dbf4-7bff-4748-82c6-2a8a3f3ec1c0/project/1d34a36d-70ad-48f6-a48f-ebf12f936819)
[![Discord](https://img.shields.io/discord/1211530334458617866?label=Join%20Community%20Discord&logo=discord)](https://discord.com/invite/FaCCaFM74Q)

A modern, responsive web application for managing class routines at Chapainawabganj Polytechnic Institute. Built with Next.js 15, TypeScript, and featuring a beautiful animated UI.

## Project Links

Netlify: https://routine-cnpi.netlify.app  
Vercel: https://routine-cnpi.vercel.app

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/xcfio/cnpi-routine)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xcfio/cnpi-routine)

## Features

-   🎨 **Modern UI/UX**: Beautiful gradient backgrounds with floating animations
-   🌙 **Dark/Light Theme**: Automatic theme detection with manual toggle
-   📱 **Fully Responsive**: Optimized for all screen sizes
-   ⚡ **Fast Performance**: Built with Next.js 14 and TypeScript
-   📄 **Export Options**: Download routines as JSON or PDF
-   ⌨️ **Keyboard Shortcuts**: Quick actions with keyboard shortcuts
-   🔍 **Form Validation**: Real-time form validation with visual feedback

## Tech Stack

-   **Framework**: Next.js 14 (App Router)
-   **Language**: TypeScript
-   **Styling**: CSS Modules with CSS Variables
-   **PDF Generation**: jsPDF
-   **Fonts**: Inter & JetBrains Mono

## Getting Started

### Prerequisites

-   Node.js 22+
-   npm or pnpm

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/xcfio/cnpi-routine.git
    cd cnpi-routine
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    ```

3. **Set up environment variables**

    ```bash
    cp env.example .env
    # Edit .env with your database credentials
    ```

4. **Start development server**
    ```bash
    node --run dev
    ```

### API Request Format

```json
{
    "year": "2025",
    "department": "68",
    "semester": "7",
    "shift": "2",
    "group": "A"
}
```

### API Response Format

```json
{
    "code": "68-7A2",
    "load": "27",
    "class": {
        "Sunday": {
            "1": {
                "time": "01:30-02:15",
                "subject": "Business Communication (25831)",
                "teacher": "Md. Azizur Rahman (AR)",
                "classroom": "S-419"
            }
        }
    },
    "teacher": [
        {
            "name": "Md. Azizur Rahman (AR)",
            "designation": "Instructor (Non-Tech-Accounting)",
            "mobile": "01724441634",
            "subject": "Business Communication (25831)"
        }
    ]
}
```

## Keyboard Shortcuts

-   `Ctrl/Cmd + Enter`: Submit form
-   `Ctrl/Cmd + D`: Download PDF (when routine is displayed)
-   `Ctrl/Cmd + J`: Download JSON (when routine is displayed)
-   `Ctrl/Cmd + T`: Toggle theme

## Customization

### Themes

The application uses CSS variables for theming. You can customize colors in `app/globals.css`:

```css
:root {
    --primary-gradient: linear-gradient(145deg, #0f4c81 0%, #1f8ecb 40%, #0f2027 100%);
    --bg-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* ... other variables */
}
```

### Animation

Modify floating shapes and gradient orbs in `components/AnimatedBackground.tsx` and corresponding CSS animations.

## Building for Production

```bash
node --run build
node --run start
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support or questions, please open an issue in the repository or contact the development team.
