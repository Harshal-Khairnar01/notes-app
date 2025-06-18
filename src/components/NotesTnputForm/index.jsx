import React from "react";
import { useNotes } from "../../context/notes.context";
import { AiOutlinePlusCircle } from "react-icons/ai";

const NotesInputform = ({ isImportantPage }) => {
  const { title, text, notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    notesDispatch({
      type: isImportantPage ? "ADD_IMPORTANT_NOTE" : "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };
  return (
    <>
      <div className="  self-center flex flex-col w-[450px] relative border-2 rounded-md border-gray-400 gap-2 p-2">
        <input
          type="text"
          value={title}
          onChange={onTitleChange}
          placeholder="Enter title"
          className=" outline-none"
        />
        <textarea
          value={text}
          onChange={onTextChange}
          placeholder="Enter Text"
          rows={3}
          className=" outline-none"
        ></textarea>
        <button
          disabled={title.length === 0}
          onClick={onAddClick}
          className={` ${
            title.length === 0 ? " cursor-not-allowed" : "cursor-pointer"
          } absolute bottom-1 right-1 bg-white`}
        >
          <AiOutlinePlusCircle size={24} />
        </button>
      </div>
    </>
  );
};

export default NotesInputform;
