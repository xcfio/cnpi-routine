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

A modern, responsive web application for managing class routines at Chapainawabganj Polytechnic Institute. Built with Next.js 15, TypeScript, and featuring a beautiful animated UI. The frontend connects to a high-performance Fastify backend API for data management.

## Project Links

**Frontend:**
- Netlify: https://routine-cnpi.netlify.app  
- Vercel: https://routine-cnpi.vercel.app

**Backend API:**
- Repository: https://github.com/xcfio/api
- Production API: https://api-xcfio.onrender.com/

## Architecture

This application follows a modern microservices architecture:

- **Frontend**: Next.js 15 application handling UI, routing, and user interactions
- **Backend**: Fastify API server managing data processing, database operations, and business logic
- **Communication**: RESTful API calls between frontend and backend services

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/xcfio/cnpi-routine)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xcfio/cnpi-routine)

## Features

-   🎨 **Modern UI/UX**: Beautiful gradient backgrounds with floating animations
-   🌙 **Dark/Light Theme**: Automatic theme detection with manual toggle
-   📱 **Fully Responsive**: Optimized for all screen sizes
-   ⚡ **Fast Performance**: Built with Next.js 15 and TypeScript frontend + Fastify backend
-   📄 **Export Options**: Download routines as JSON or PDF
-   ⌨️ **Keyboard Shortcuts**: Quick actions with keyboard shortcuts
-   🔍 **Form Validation**: Real-time form validation with visual feedback
-   🚀 **High-Performance API**: Powered by Fastify for fast data processing

## Tech Stack

### Frontend
-   **Framework**: Next.js 15 (App Router)
-   **Language**: TypeScript
-   **Styling**: CSS Modules with CSS Variables
-   **PDF Generation**: jsPDF
-   **Fonts**: Inter & JetBrains Mono

### Backend
-   **API Framework**: Fastify
-   **Repository**: [xcfio/api](https://github.com/xcfio/api)
-   **Deployment**: Render.com

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
    # Edit .env with your API endpoint configuration
    ```

    Add your backend API URL:
    ```env
    NEXT_PUBLIC_API_URL=https://api-xcfio.onrender.com
    # For local development: http://localhost:7200
    ```

4. **Start development server**
    ```bash
    node --run dev  # Runs on port 7700
    ```

### Running with Local Backend

If you want to run the backend locally as well:

1. **Clone and setup the backend**
    ```bash
    git clone https://github.com/xcfio/api.git
    cd api
    npm install
    npm run dev  # Runs on port 7200
    ```

2. **Update your frontend .env**
    ```env
    NEXT_PUBLIC_API_ENDPOINT=http://localhost:7200/
    ```

### API Integration

The frontend communicates with the Fastify backend through RESTful API calls. Here's the request/response format:

#### API Request Format

```json
{
    "year": "2025",
    "department": "68",
    "semester": "7",
    "shift": "2",
    "group": "A"
}
```

#### API Response Format

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

### API Configuration

To use a different backend or switch between production and local development:

1. Update `NEXT_PUBLIC_API_ENDPOINT` in your `.env` file
2. Ensure the backend follows the same API contract shown above
3. Update any API-specific configurations in your fetch calls

**Local Development Ports:**
- Frontend: http://localhost:7700
- Backend: http://localhost:7200

## Building for Production

```bash
node --run build
node --run start
```

## Performance Considerations

The application is optimized for performance with:

- **Static Generation**: Pre-rendered pages where possible
- **Client-side Caching**: Efficient data fetching and caching strategies
- **Fast Backend**: Fastify API provides sub-millisecond response times
- **CDN Deployment**: Frontend deployed on global CDN (Netlify/Vercel)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

For backend contributions, please visit the [API repository](https://github.com/xcfio/api).

## Related Repositories

- **Backend API**: [xcfio/api](https://github.com/xcfio/api) - Fastify backend service
- **Frontend**: [xcfio/cnpi-routine](https://github.com/xcfio/cnpi-routine) - This Next.js application

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support or questions:
- Frontend issues: Open an issue in this repository
- Backend/API issues: Open an issue in the [API repository](https://github.com/xcfio/api)
- General discussion: Join our [Discord community](https://discord.com/invite/FaCCaFM74Q)