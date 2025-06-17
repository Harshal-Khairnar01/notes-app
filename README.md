# Memochive - Notes App

A modern note-taking application built with React and Vite that allows users to create, organize, and manage their notes efficiently.

## Features

- Create and manage notes with title and content
- Responsive design with sidebar navigation
- Pin important notes
- Archive notes for better organization
- Move notes to bin (trash)
- Categories: Home, Archive, Important, and Bin
- Fully responsive UI with mobile support

## Tech Stack

- React 19
- Vite 6
- TailwindCSS 4
- ESLint for code quality
- React Router for navigation
- UUID for unique identifiers


## Components

### Home Page

The main page where users can:

- Create new notes with title and content
- View all created notes in a grid layout
- Pin/unpin notes
- Archive notes
- Delete notes

### Navbar

- Displays app logo and "Memochive" branding
- Consistent header across all pages

### Sidebar

Navigation component with:

- Home: View all active notes
- Archive: View archived notes
- Important: View pinned notes
- Bin: View deleted notes
- Responsive design (collapses to icons on mobile)

### State Management

Uses React's useReducer with actions:

- TITLE: Update note title
- TEXT: Update note content
- ADD_NOTE: Create new note
- CLEAR_INPUT: Reset input fields

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd notes-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- TailwindCSS team for the utility-first CSS framework
