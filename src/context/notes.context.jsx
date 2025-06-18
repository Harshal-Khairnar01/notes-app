import { createContext, useContext, useEffect, useReducer } from "react";

import { notesReducer } from "../reducers/notesReducer";

const notesContext = createContext();

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

  useEffect(() => {
    localStorage.setItem("notesAppState", JSON.stringify(state));
  }, [state]);
  const { title, text, notes, archive, important, bin } = state;

  return (
    <notesContext.Provider
      value={{ title, text, notes, archive, important, bin, notesDispatch }}
    >
      {children}
    </notesContext.Provider>
  );
};

const useNotes = () => useContext(notesContext);

export { NotesProvider, useNotes };
