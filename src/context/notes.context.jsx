import { createContext, useContext, useReducer } from "react";

import { notesReducer } from "../reducers/notesReducer";

const notesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialstate = {
    title: "",
    text: "",
    notes: [],
    archive:[]

  };

  const [{ title, text, notes,archive }, notesDispatch] = useReducer(
    notesReducer,
    initialstate
  );

  return (
    <notesContext.Provider value={{ title, text, notes,archive, notesDispatch }}>
      {children}
    </notesContext.Provider>
  );
};

const useNotes = () => useContext(notesContext);

export { NotesProvider, useNotes };
