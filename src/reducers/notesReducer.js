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
          { text: state.text, title: state.title, id: uuid() },
        ],
      };
      case "CLEAR_INPUT":
        return{
            ...state,
            title:'',
            text:'',
        }
    default:
      return state;
  }
};
