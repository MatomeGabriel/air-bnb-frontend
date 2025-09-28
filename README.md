# Airbnb Front-End

A modern React + Vite front-end for an Airbnb-style accommodation platform.

## Overview

This project is a feature-rich, modular React application built with Vite. It supports user authentication, listings management, reservations, profile updates, and more, with a clean design system and robust routing.

## Features

- **React 19** and **Vite** for fast development and HMR
- **Routing** via `react-router-dom`
- **State management** and data fetching with `@tanstack/react-query`
- **Authentication** and protected routes
- **Styled Components** for theming and design system
- **Date selection** with `react-date-range`
- **Image uploads** via `react-dropzone`
- **Form handling** with `react-hook-form`
- **Notifications** using `react-hot-toast`
- **Animations** with `framer-motion`
- **Context Providers** for locations, authentication, host, and selected location
- **Custom hooks, utilities, and modular architecture**

## Project Structure

```
front-end/
│
├── public/                # Static assets
├── src/
│   ├── App.jsx            # Main app component, sets up routes and providers
│   ├── main.jsx           # Entry point, renders App
│   ├── assets/            # Images and SVGs
│   ├── context/           # React context providers (Auth, Locations, Host, etc.)
│   ├── design-system/     # Global styles and design tokens
│   ├── features/          # Feature modules (authentication, listings, locations, reservations)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Query client and shared libraries
│   ├── pages/             # Page components (Home, Locations, Login, etc.)
│   ├── services/          # API and service logic
│   ├── styles/            # CSS/Styled Components
│   ├── ui/                # Reusable UI components (buttons, forms, layout, etc.)
│   └── utils/             # Utility functions and constants
├── index.html             # Main HTML file
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Main Pages

- **HomePage**: Landing page
- **Locations**: List and details of locations
- **Listings**: User's listings (protected)
- **CreateListing/EditListing**: Create or edit a listing (protected)
- **Login/Signup**: Authentication pages
- **ProfilePage/UploadProfileImage**: User profile management (protected)
- **Reservation**: Manage reservations (protected)
- **UnauthorizedPage**: Shown for unauthorized access
- **PageNotFound**: 404 page

## Routing Overview

- `/` – Home page
- `/locations` – List of locations
- `/locations/:id` – Location details
- `/listings` – Listings (protected)
- `/listings/new` – Create new listing (protected)
- `/listings/edit/:id` – Edit listing (protected)
- `/login`, `/signup`, `/signup/host` – Auth pages
- `/profile` – User profile (protected)
- `/reservations` – Reservations (protected)
- `/unauthorized` – Unauthorized access
- `*` – 404 Page

## Getting Started

1. **Install dependencies:**

   ```powershell
   npm install
   ```

2. **Run the development server:**

   ```powershell
   npm run dev
   ```

3. **Build for production:**

   ```powershell
   npm run build
   ```

4. **Preview production build:**
   ```powershell
   npm run preview
   ```

## Scripts

- `dev` – Start Vite dev server
- `build` – Build for production
- `lint` – Run ESLint
- `preview` – Preview production build

## Environment

- Node.js and npm required
- Vite for build and dev server
- See `package.json` for full list of dependencies

## Deployment

This app is ready for deployment on Vercel.

1. Push your code to GitHub.
2. Import your repo in Vercel.
3. Set environment variables (e.g., `VITE_API_URL`) in the Vercel dashboard.
4. Vercel will auto-detect Vite and build your app.

## Contributing

Feel free to open issues or submit PRs for improvements!
