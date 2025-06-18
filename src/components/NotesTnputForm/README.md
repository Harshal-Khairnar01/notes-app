# NotesInputForm Component Documentation

A reusable form component for creating both regular and important notes in the Memochive application.

## Component Features

### Props

```javascript
{
  isImportantPage: boolean; // Determines if notes are created as important
}
```

### Input Fields

- Title input with validation
- Text area for note content
- Add button with disabled state
- Visual feedback for validation

## Functionality

### State Management

Uses the `useNotes` context hook to access:

- `title`: Current title input value
- `text`: Current text input value
- `notesDispatch`: Dispatch function for state updates

### Event Handlers

```javascript
// Title input handler
const onTitleChange = (e) => {
  notesDispatch({
    type: "TITLE",
    payload: e.target.value,
  });
};

// Text input handler
const onTextChange = (e) => {
  notesDispatch({
    type: "TEXT",
    payload: e.target.value,
  });
};

// Add note handler
const onAddClick = () => {
  notesDispatch({
    type: isImportantPage ? "ADD_IMPORTANT_NOTE" : "ADD_NOTE",
  });
  notesDispatch({
    type: "CLEAR_INPUT",
  });
};
```

## Validation

- Title is required for note creation
- Add button is disabled when title is empty
- Visual feedback for disabled state

## UI Features

### Layout

- Centered form design
- Fixed width (450px)
- Rounded borders
- Clean spacing

### Input Elements

- Title input field
- Multi-line text area (3 rows)
- Add button with icon

### Styling

Uses Tailwind CSS for:

- Form layout and positioning
- Input field styling
- Button states
- Responsive design
- Consistent spacing

## Usage Examples

### Regular Notes

```jsx
<NotesInputForm isImportantPage={false} />
```

### Important Notes

```jsx
<NotesInputForm isImportantPage={true} />
```

## Dependencies

- react-icons for add button icon
- Context API for state management
- Tailwind CSS for styling
