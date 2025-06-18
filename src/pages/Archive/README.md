# Archive Component Documentation

The Archive component displays archived notes and provides functionality to manage archived notes in the Memochive application.

## Component Structure

```jsx
Archive
├── Navbar            // Header component
└── Main content
    ├── Sidebar      // Navigation component
    └── Archive Area
        └── Notes Grid (archived notes)
```

## Features

- Display archived notes in a grid layout
- Restore notes back to main notes list
- Maintain note data structure in archive
- Responsive layout

## State Management

Uses the `useNotes` context hook to access:

- `archive`: Array of archived notes
- `notesDispatch`: Dispatch function for state updates

## Archive Functionality

### Archive Actions (in notesReducer)

```javascript
// Moving to archive
case "ARCHIVE": {
  // Moves note to archive array
  // Removes note from main notes array
}

// Restoring from archive
case "ARCHIVE_REMOVE": {
  // Moves note back to main notes array
  // Removes note from archive array
}
```

### Archive Helper Function

`findNotesInArchive.js` utility:

```javascript
export const findNotesInArchive = (archive, id) => {
  return archive.some((note) => note.id === id);
};
```

## UI Features

### NotesCard in Archive

- Disabled pin functionality for archived notes
- Visual indicator for archived state
- Archive toggle button (changes color in archive)
- Maintains note content display

## Styling

Uses Tailwind CSS for:

- Responsive grid layout
- Consistent spacing
- Flexible container sizing
- Component alignment

## Dependencies

- React Router for navigation
- Context API for state management
- NotesCard component for displaying notes
- Utility functions for archive management
