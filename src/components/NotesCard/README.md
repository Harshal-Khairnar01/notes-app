# NotesCard Component Documentation

The NotesCard component is a reusable component for displaying individual notes in the Memochive application.

## Component Features

### Display

- Title in header section
- Content in body section
- Pin status indicator (hidden in archive)
- Action buttons with state indicators

### Interactions

- Toggle pin status (active notes only)
- Archive/Restore note toggle
- Delete note (UI ready)
- Visual feedback for archived state

### Archive Integration

- Uses `findNotesInArchive` utility to check note status
- Conditional rendering of pin button
- Color indication for archive status
- Seamless archive/restore functionality

## Props

```javascript
{
  note: {
    id: string,      // Unique identifier
    title: string,   // Note title
    text: string,    // Note content
    isPinned: boolean // Pin status
  }
}
```

## State Management

Uses the notes context through `useNotes` hook:

- Accesses `notesDispatch` for state updates
- Accesses `archive` array for status checks
- Handles actions:
  - PIN: Toggle note pinned status
  - ARCHIVE: Move note to archive
  - ARCHIVE_REMOVE: Restore note from archive

### Archive State Logic

```javascript
const isNoteInArchive = findNotesInArchive(archive, note.id);

// Archive toggle logic
const onArchiveClick = (id) => {
  !isNoteInArchive
    ? dispatch({ type: "ARCHIVE", payload: { id } })
    : dispatch({ type: "ARCHIVE_REMOVE", payload: { id } });
};

## UI Elements

### Header Section
- Note title
- Pin toggle button with dynamic icon
  - `VscPinned`: Unpinned state
  - `TbPinnedFilled`: Pinned state

### Content Section
- Note text
- Action buttons
  - Archive button (`RiInboxArchiveLine`)
  - Delete button (`AiOutlineDelete`)

## Styling

Uses Tailwind CSS for:
- Card layout (`w-[250px]`)
- Border and rounded corners
- Flexible content arrangement
- Responsive design
- Icon positioning and spacing

## Dependencies

- react-icons:
  - VscPinned
  - TbPinnedFilled
  - RiInboxArchiveLine
  - AiOutlineDelete
- notes.context for state management
```
