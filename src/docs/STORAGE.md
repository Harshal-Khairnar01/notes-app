# Local Storage Documentation

The Memochive application implements persistent storage using the browser's localStorage API to maintain application state across sessions.

## Implementation

### Notes Context with Persistence (`notes.context.jsx`)

```javascript
const getInitialState = () => {
  const stored = localStorage.getItem("notesAppState");
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    title: "",
    text: "",
    notes: [],
    archive: [],
    important: [],
    bin: [],
  };
};

const NotesProvider = ({ children }) => {
  const [state, notesDispatch] = useReducer(notesReducer, {}, getInitialState);

  // Persist state changes to localStorage
  useEffect(() => {
    localStorage.setItem("notesAppState", JSON.stringify(state));
  }, [state]);

  // ... rest of the provider implementation
};
```

## Features

### Automatic State Persistence

- All state changes are automatically saved
- No manual save actions required
- Real-time synchronization with localStorage

### State Recovery

- Application state is recovered on page load
- Seamless user experience across sessions
- Fallback to initial state if no stored data

### Persisted Data Structure

```javascript
{
  title: string,          // Current note title
  text: string,          // Current note text
  notes: Note[],         // Active notes
  archive: Note[],       // Archived notes
  important: Note[],     // Important notes
  bin: Note[]           // Deleted notes
}
```

## Implementation Details

### Storage Key

- Key: `"notesAppState"`
- Stores complete application state
- JSON serialized data

### State Initialization

1. Check for existing data in localStorage
2. Parse stored JSON data if available
3. Fall back to default initial state if no data exists

### State Updates

1. State changes trigger useEffect
2. Complete state is serialized
3. Serialized state is saved to localStorage

## Performance Considerations

### Optimization Techniques

- Single storage key for all data
- Bulk updates instead of individual saves
- JSON serialization of complete state

### Storage Limits

- localStorage limit is typically 5-10 MB
- Sufficient for text-based notes
- Consider cleanup strategies for large datasets

### Error Handling

- Safe JSON parsing
- Fallback to initial state
- Storage quota handling

## Best Practices

1. **Data Integrity**

   - Complete state updates
   - Atomic operations
   - Validation before storage

2. **Performance**

   - Batch updates
   - Minimize storage operations
   - Efficient data structures

3. **User Experience**
   - Seamless state recovery
   - No data loss between sessions
   - Consistent state management

## Usage Example

```javascript
// Reading state
const storedState = localStorage.getItem("notesAppState");
const initialState = storedState ? JSON.parse(storedState) : defaultState;

// Writing state
localStorage.setItem("notesAppState", JSON.stringify(currentState));
```

## Testing Considerations

1. **Storage Availability**

   - Check localStorage availability
   - Handle private browsing modes
   - Provide fallback behavior

2. **Data Consistency**

   - Validate stored data structure
   - Handle migration of old data formats
   - Ensure state integrity

3. **Error Scenarios**
   - Storage quota exceeded
   - Invalid stored data
   - Browser storage restrictions
