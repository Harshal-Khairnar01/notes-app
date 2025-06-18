# Bin Component Documentation

The Bin component manages deleted notes in the Memochive application, providing a trash/recycle bin functionality where users can view and permanently delete notes.

## Component Structure

```jsx
Bin
├── Navbar            // Header component
└── Main content
    ├── Sidebar      // Navigation component
    └── Bin Area
        └── Notes Grid or Empty State Message
```

## Features

### Display

- Grid layout of deleted notes
- Empty state message when bin is empty
- Maintains note structure and content
- Responsive design

### Functionality

- View deleted notes
- Permanently delete notes
- Notes can come from both main notes list and archive

## State Management

Uses the `useNotes` context hook to access:

- `bin`: Array of deleted notes
- `notesDispatch`: Dispatch function for state updates

### Bin Actions (in notesReducer)

```javascript
case "BIN": {
  // For permanently deleting
  if (isNoteInBin) {
    // Remove from bin array
    return {
      ...state,
      bin: state.bin.filter((note) => note.id !== action.payload.id),
    };
  }
  // For moving to bin
  else {
    return {
      ...state,
      bin: [
        ...state.bin,
        // Find note from either notes or archive
        state.notes.find((note) => note.id === action.payload.id) ||
        state.archive.find((note) => note.id === action.payload.id),
      ],
      // Remove from both notes and archive arrays
      notes: state.notes.filter((note) => note.id !== action.payload.id),
      archive: state.archive.filter((note) => note.id !== action.payload.id),
    };
  }
}
```

### Utility Function

`findNotesInBin.js`:

```javascript
export const findNotesInBin = (bin, id) => {
  return bin.some((note) => note.id === id);
};
```

## UI Features

### Empty State

- Displays "Nothing in Bin!" message when bin is empty
- Clean and informative user feedback

### NotesCard in Bin

- Disabled pin functionality
- Disabled archive functionality
- Delete button acts as permanent delete
- Maintains note content and title display

## Styling

Uses Tailwind CSS for:

- Responsive grid layout
- Empty state messaging
- Consistent spacing
- Component alignment

## Integration with NotesCard

The NotesCard component has special behavior when displaying notes from the bin:

- Hides pin toggle button
- Hides archive button
- Delete button performs permanent deletion
- Maintains consistent card layout and styling

## Dependencies

- React Router for navigation
- Context API for state management
- NotesCard component for displaying notes
- Utility functions for bin management
