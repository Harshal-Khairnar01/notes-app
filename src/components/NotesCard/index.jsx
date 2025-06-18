import React from "react";

import { VscPinned } from "react-icons/vsc";
import { RiInboxArchiveLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { useNotes } from "../../context/notes.context";
import { TbPinnedFilled } from "react-icons/tb";

const NotesCard = ({ note }) => {
  const { notesDispatch } = useNotes();

  const onPinclick = (id) => {
    notesDispatch({
      type: "PIN",
      payload: { id },
    });

    console.log(note)
  };


  return (
    <div className=" w-[250px] border-2 border-gray-400 flex flex-col p-3  rounded-lg gap-2">
      <div className=" flex items-center justify-between  border-b-2 border-gray-300 p-1">
        <h2 className="">{note.title}</h2>
        <button onClick={() => onPinclick(note.id)}>
          {note.isPinned ? (
            <TbPinnedFilled size={20} />
          ) : (
            <VscPinned size={20} />
          )}
        </button>
      </div>
      <div className=" flex  flex-col p-1">
        <p>{note.text}</p>
        <div className=" flex gap-3 ml-auto ">
          <RiInboxArchiveLine size={20} />
          <AiOutlineDelete size={20} />
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
