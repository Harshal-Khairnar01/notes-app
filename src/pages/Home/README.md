# Home Component Documentation

The Home component is the main page of the Memochive notes application where users can create and manage their notes.

## Component Structure

```jsx
Home
├── Navbar            // Header component
└── Main content
    ├── Sidebar      // Navigation component
    └── Notes Area
        ├── Note Input Form
        └── Notes Grid
```

## Features

### Note Input Form
- Title input field
- Text content textarea
- Add button (disabled when title is empty)
- Real-time input validation

### Notes Grid
- Responsive grid layout
- Individual note cards with:
  - Title header
  - Content area
  - Action buttons (Pin, Archive, Delete)

## State Management

Uses Context API (`notes.context.jsx`) with `useReducer` hook:

```javascript
const initialstate = {
  title: "",    // Current note title input
  text: "",     // Current note text input
  notes: []     // Array of saved notes
};
```

### Context Structure

- `NotesProvider`: Global state provider component
- `useNotes`: Custom hook for accessing notes context
- Provides: `{ title, text, notes, notesDispatch }`

### Actions

- `TITLE`: Updates the title input
- `TEXT`: Updates the text input
- `ADD_NOTE`: Creates a new note with isPinned status
- `CLEAR_INPUT`: Resets the input fields
- `PIN`: Toggles the isPinned status of a note

### Note Object Structure

```javascript
{
  id: string,      // UUID
  title: string,   // Note title
  text: string,    // Note content
  isPinned: boolean // Pin status of the note
}
```

### Notes Organization

Notes are automatically organized into two sections:
- Pinned Notes: Notes with `isPinned: true`
- Other Notes: Notes with `isPinned: false`

## Event Handlers

- `onTitleChange`: Updates title in state
- `onTextChange`: Updates text content in state
- `onAddClick`: Creates new note and clears input

## Styling

Uses Tailwind CSS for:
- Responsive layout
- Grid system for notes
- Form styling
- Card design
- Icons from react-icons library

## Dependencies

- react-icons for UI icons
- uuid for generating unique note IDs
- Tailwind CSS for styling
