import { v4 as uuid } from "uuid";
export const notesReducer = (state, action) => {
  switch (action.type) {
    case "TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "TEXT":
      return {
        ...state,
        text: action.payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          { text: state.text, title: state.title, id: uuid(), isPinned: false },
        ],
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? { ...note, isPinned: !note.isPinned }
            : note
        ),
      };
    case "ARCHIVE":
      return {
        ...state,
        archive: [
          ...state.archive,
          state.notes.find((note) => note.id === action.payload.id),
        ],
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    case "ARCHIVE_REMOVE":
      return {
        ...state,
        notes: [
          ...state.notes,
          state.archive.find((note) => note.id === action.payload.id),
        ],
        archive: state.archive.filter((note) => note.id !== action.payload.id),
      };
    case "BIN":
      if (action.payload.isNoteInBin) {
        return {
          ...state,
          bin: state.bin.filter((note) => note.id !== action.payload.id),
        };
      } else {
        return {
          ...state,
          bin: [
            ...state.bin,
            state.notes.find((note) => note.id === action.payload.id) ||
              state.archive.find((note) => note.id === action.payload.id),
          ],
          notes: state.notes.filter((note) => note.id !== action.payload.id),
          archive: state.archive.filter(
            (note) => note.id !== action.payload.id
          ),
        };
      }
    default:
      return state;
  }
};
