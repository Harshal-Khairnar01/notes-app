# NotesCard Component Documentation

The NotesCard component is a reusable component for displaying individual notes in the Memochive application.

## Component Features

### Display
- Title in header section
- Content in body section
- Pin status indicator
- Action buttons

### Interactions
- Toggle pin status
- Archive note (UI ready)
- Delete note (UI ready)

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
- Handles PIN action

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
