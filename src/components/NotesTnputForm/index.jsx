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
      <div className=" mt-5  self-center flex flex-col w-11/12 lg:w-[450px] relative border-2 rounded-md border-[var(--color-accent)]  dark:border-[var(--color-accent-d)] gap-2 p-2  bg-[var(--color-input)]  dark:bg-[var(--color-input-d)]">
        <input
          type="text"
          value={title}
          onChange={onTitleChange}
          placeholder="Enter title"
          className=" outline-none  text-black placeholder:text-gray-800 dark:placeholder:text-gray-400"
        />
        <textarea
          value={text}
          onChange={onTextChange}
          placeholder="Enter Text"
          rows={3}
          className=" outline-none  text-black placeholder:text-gray-800 dark:placeholder:text-gray-400"
        ></textarea>
        <button
          disabled={title.length === 0}
          onClick={onAddClick}
          className={` ${
            title.length === 0 ? " cursor-not-allowed" : "cursor-pointer"
          } absolute bottom-1 right-1 bg-[var(--color-secondary)] dark:bg-[var(--color-secondary-d)] text-black dark:text-white rounded-full`}
        >
          <AiOutlinePlusCircle size={24} />
        </button>
      </div>
    </>
  );
};

export default NotesInputform;
