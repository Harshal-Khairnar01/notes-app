import { createContext, useContext, useReducer } from "react";

import { notesReducer } from "../reducers/notesReducer";

const notesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialstate = {
    title: "",
    text: "",
    notes: [],
    archive: [],
    important: [],
    bin: []
  };

  const [{ title, text, notes,archive,important,bin }, notesDispatch] = useReducer(
    notesReducer,
    initialstate
  );

  return (
    <notesContext.Provider value={{ title, text, notes,archive,important,bin, notesDispatch }}>
      {children}
    </notesContext.Provider>
  );
};

const useNotes = () => useContext(notesContext);

export { NotesProvider, useNotes };
