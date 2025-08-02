# Class Routine - Next.js Application

[![Code Test](https://github.com/xcfio/cnpi-routine/actions/workflows/test.yaml/badge.svg)](https://github.com/xcfio/cnpi-routine/actions/workflows/test.yaml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/04412ec1-40de-46c3-bf7e-52a102e7f5e0/deploy-status)](https://app.netlify.com/projects/routine-cnpi/deploys)
[![License](https://img.shields.io/github/license/xcfio/cnpi-routine)](https://opensource.org/license/mit)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js Version](https://img.shields.io/badge/Node.js-24.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Package Manager](https://img.shields.io/badge/pnpm-latest-orange?logo=pnpm)](https://pnpm.io/)
[![Time](https://wakatime.com/badge/user/80f5dbf4-7bff-4748-82c6-2a8a3f3ec1c0/project/1d34a36d-70ad-48f6-a48f-ebf12f936819.svg)](https://wakatime.com/badge/user/80f5dbf4-7bff-4748-82c6-2a8a3f3ec1c0/project/1d34a36d-70ad-48f6-a48f-ebf12f936819)

A modern, responsive web application for managing class routines at Chapainawabganj Polytechnic Institute. Built with Next.js 14, TypeScript, and featuring a beautiful animated UI.

## Project Links

Netlify: https://routine-cnpi.netlify.app  
Vercel: https://cnpi-routine.vercel.app

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

-   Node.js 20+
-   npm or pnpm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd class-routine-nextjs
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── routine/
│   │       └── route.ts          # API endpoint for routine data
│   ├── globals.css               # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/
│   ├── AnimatedBackground.tsx   # Floating shapes animation
│   ├── RoutineForm.tsx         # Form component
│   ├── RoutineResult.tsx       # Results display
│   ├── RoutineTable.tsx        # Routine table
│   ├── TeacherList.tsx         # Teacher information
│   └── ThemeToggle.tsx         # Theme switcher
├── types/
│   └── index.ts                # TypeScript type definitions
├── utils/
│   └── downloadUtils.ts        # PDF and JSON download utilities
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## API Integration

The application includes a mock API endpoint at `/api/routine`. To connect to your actual backend:

1. Update the API endpoint in `app/api/routine/route.ts`
2. Replace `YOUR_ACTUAL_API_ENDPOINT` with your backend URL
3. Adjust the data structure if needed in `types/index.ts`

### API Request Format

```json
{
    "year": "2025",
    "department": "85",
    "semester": "1",
    "shift": "1",
    "group": "A"
}
```

### API Response Format

```json
{
    "code": "85-1B1",
    "class": {
        "Saturday": {
            "8:00-9:00": {
                "time": "8:00-9:00",
                "subject": "Programming Fundamentals (67011)",
                "teacher": "John Doe (CST)",
                "classroom": "Lab-1"
            }
        }
    },
    "teacher": [
        {
            "name": "John Doe",
            "designation": "Instructor",
            "mobile": "01700000000",
            "subject": "Programming Fundamentals"
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
npm run build
npm run start
```

## Deployment

The application can be deployed to any platform that supports Next.js:

-   **Vercel** (recommended): `vercel --prod`
-   **Netlify**: Use the Next.js build plugin
-   **Docker**: Create a Dockerfile with Node.js base image

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
