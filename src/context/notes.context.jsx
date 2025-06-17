import { createContext, useContext, useReducer } from "react";

import { notesReducer } from "../reducers/notesReducer";

const notesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialstate = {
    title: "",
    text: "",
    notes: "",
  };

  const [{ title, text, notes }, notesDispatch] = useReducer(
    notesReducer,
    initialstate
  );

  return (
    <notesContext.Provider value={{ title, text, notes, notesDispatch }}>
      {children}
    </notesContext.Provider>
  );
};

const useNotes = () => useContext(notesContext);

export { NotesProvider, useNotes };
