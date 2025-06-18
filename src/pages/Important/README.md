# Important Notes Component Documentation

The Important component manages high-priority notes in the Memochive application, providing a dedicated space for creating and viewing important notes.

## Component Structure

```jsx
Important
├── Navbar            // Header component
└── Main content
    ├── Sidebar      // Navigation component
    └── Important Area
        ├── NotesInputForm (with isImportantPage prop)
        └── Notes Grid
```

## Features

### Special Input Form

- Dedicated note creation for important notes
- Direct addition to important notes collection
- Same input validation as regular notes
- Uses `isImportantPage` prop for special handling

### Display

- Grid layout of important notes
- "Important Notes" section header
- Important badge on each note
- Responsive design

### Functionality

- Create notes directly as important
- View all important notes
- Delete important notes
- Special visual treatment for important notes

## State Management

Uses the `useNotes` context hook to access:

- `important`: Array of important notes
- `notesDispatch`: Dispatch function for state updates

### Important Notes Actions (in notesReducer)

```javascript
// Adding important note
case "ADD_IMPORTANT_NOTE": {
  return {
    ...state,
    important: [
      ...state.important,
      { text: state.text, title: state.title, id: uuid() }
    ],
  };
}

// Bin handling for important notes
case "BIN": {
  // ... handles deletion from important array
  important: state.important.filter((note) => note.id !== action.payload.id),
}
```

### Utility Function

`findIsNoteImportant.js`:

```javascript
export const findIsNoteImportant = (important, id) => {
  return important.some((note) => note.id === id);
};
```

## UI Features

### NotesInputForm Customization

- Uses shared NotesInputForm component
- Passes `isImportantPage={true}` for specialized behavior
- Same validation and UX as regular notes

### Important Notes Grid

- Shows only important notes
- Each note displays:
  - Title and content
  - "Important" badge
  - Delete option
  - No pin or archive options

### NotesCard Integration

- Special rendering for important notes
- Disabled pin functionality
- Disabled archive functionality
- "Important" badge display
- Maintains delete functionality

## Styling

Uses Tailwind CSS for:

- Responsive grid layout
- Note card styling
- Important badge styling (`bg-gray-300 px-2 py-1 rounded-full text-xs`)
- Consistent spacing
- Component alignment

## Dependencies

- NotesInputForm component for note creation
- NotesCard component for displaying notes
- Context API for state management
- Utility functions for important note management
