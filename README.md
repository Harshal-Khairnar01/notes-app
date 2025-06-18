# Memochive - Notes App

A modern note-taking application built with React and Vite that allows users to create, organize, and manage their notes efficiently.

## Features

- Create and manage notes with title and content
- Responsive design with sidebar navigation
- Pin important notes with visual indicators
- Archive system with toggle functionality
  - Move notes to/from archive
  - Visual indication for archived notes
  - Separate archive view
- Recycle bin functionality
  - Move notes to bin from any view
  - Permanently delete notes from bin
  - Restore notes from bin
  - Empty state handling
- Categories: Home, Archive, Important, and Bin
- Fully responsive UI with mobile support
- Smart note organization (Pinned and Other Notes)

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
- View all notes in organized sections (Pinned and Other Notes)
- Pin/unpin notes with visual indicators
- Archive notes
- Delete notes
- Separate sections for pinned and unpinned notes

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

Uses Context API with useReducer for global state management:

- Context: `NotesProvider` for global notes state
- Global State Structure:
  - title: Current note title
  - text: Current note content
  - notes: Array of active notes
  - archive: Array of archived notes
  - bin: Array of deleted notes
- Actions:
  - TITLE: Update note title
  - TEXT: Update note content
  - ADD_NOTE: Create new note with unique ID
  - CLEAR_INPUT: Reset input fields
  - PIN: Toggle pin status of a note
  - ARCHIVE: Move note to archive
  - ARCHIVE_REMOVE: Restore note from archive
  - BIN: Move to/permanently delete from bin

### NotesCard Component

Reusable card component for displaying notes:

- Title and content display
- Pin/Unpin toggle with icon changes
- Archive and Delete options
- Responsive layout with Tailwind CSS

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
