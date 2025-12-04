# Sai Sandeep Mamidala - Portfolio

A modern, interactive portfolio website showcasing projects, experience, and skills. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Beautiful, responsive design with smooth animations
- 🎨 Dark/Light theme toggle
- 📧 Functional contact form with backend API
- 🚀 Smooth scrolling navigation
- 💬 Interactive AI chatbot
- 🎵 Ambient sounds control
- 📱 Fully responsive design
- ⚡ Fast performance with Vite

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- (Optional) For email functionality: Email service credentials

## Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Connect your GitHub repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the Vite framework

2. **Configure Environment Variables (Optional):**
   - In Vercel project settings, add these environment variables if you want email functionality:
     - `EMAIL_SERVICE` (e.g., "gmail")
     - `EMAIL_USER` (your email address)
     - `EMAIL_PASS` (your app password)
     - `CONTACT_EMAIL` (where to send contact form submissions)

3. **Deploy:**
   - Vercel will automatically build and deploy on every push to main
   - The API endpoints (`/api/contact`, `/api/health`) will work as serverless functions

**Note:** The contact form will work even without email configuration - submissions will be logged to Vercel's function logs.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Sandeep_portfolio
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd server
npm install
cd ..
```

### Running the Application

#### Development Mode

1. Start the backend server (in one terminal):
```bash
cd server
npm run dev
```

2. Start the frontend development server (in another terminal):
```bash
npm run dev
```

The frontend will be available at `http://localhost:8080`
The backend API will be available at `http://localhost:3001`

#### Production Build

1. Build the frontend:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

## Backend Setup

The backend server handles contact form submissions. See [server/README.md](server/README.md) for detailed setup instructions.

**Quick Setup:**

1. Navigate to the server directory:
```bash
cd server
```

2. Create a `.env` file:
```bash
cp .env.example .env
```

3. (Optional) Configure email credentials in `.env` for production use

4. Start the server:
```bash
npm start
```

**Note:** The contact form will work even without email configuration - submissions will be logged to the console.

## Project Structure

```
Sandeep_portfolio/
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── App.tsx         # Main app component
├── server/             # Backend API server
│   ├── index.js       # Express server
│   └── package.json   # Backend dependencies
├── public/             # Static assets
└── package.json       # Frontend dependencies
```

## Key Components

- **HeroSection**: Landing section with call-to-action buttons
- **AboutSection**: Personal introduction and background
- **ProjectsSection**: Showcase of projects with GitHub/demo links
- **ExperienceSection**: Professional experience timeline
- **TechStackSection**: Technologies and skills
- **ContactSection**: Contact form with backend integration
- **PortfolioChatbot**: AI-powered assistant
- **Navigation**: Smooth scroll navigation

## Features Implemented

✅ Fully functional buttons with smooth transitions
✅ Backend API for contact form
✅ Beautiful animations and transitions
✅ Responsive design
✅ Dark/Light theme support
✅ Smooth scrolling navigation
✅ Interactive chatbot
✅ Social media links
✅ Project demo handling

## Customization

### Adding Your Resume

Place your resume PDF in the `public` folder as `resume.pdf` for the download button to work.

### Updating Contact Information

Edit the contact information in:
- `src/components/HeroSection.tsx` (social links)
- `src/components/ContactSection.tsx` (contact details)

### Configuring Email

See [server/README.md](server/README.md) for email configuration options.

## Technologies Used

- **Frontend:**
  - React 18
  - TypeScript
  - Vite
  - Tailwind CSS
  - Framer Motion
  - Radix UI
  - React Router

- **Backend:**
  - Node.js
  - Express
  - Nodemailer

## License

© 2024 Sai Sandeep Mamidala. All rights reserved.

## Contact

- Email: mss9430@nyu.edu
- GitHub: [Sandeep2229](https://github.com/Sandeep2229)
- LinkedIn: [sai-sandeep-mamidala](https://www.linkedin.com/in/sai-sandeep-mamidala/)

