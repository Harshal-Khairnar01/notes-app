import React from "react";

import { VscPinned } from "react-icons/vsc";
import { RiInboxArchiveLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { useNotes } from "../../context/notes.context";
import { TbPinnedFilled } from "react-icons/tb";
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { findNotesInBin } from "../../utils/findNotesInBin";

const NotesCard = ({ note }) => {
  const { notesDispatch, archive, bin } = useNotes();

  const isNoteInArchive = findNotesInArchive(archive, note.id);

  const isNoteInBin = findNotesInBin(bin, note.id);

  const onPinclick = (id) => {
    notesDispatch({
      type: "PIN",
      payload: { id },
    });

    console.log(note);
  };

  const onArchiveClick = (id) => {
    !isNoteInArchive
      ? notesDispatch({
          type: "ARCHIVE",
          payload: { id },
        })
      : notesDispatch({
          type: "ARCHIVE_REMOVE",
          payload: { id },
        });
  };

  const onBinClick = (id) => {
    notesDispatch({
      type: "BIN",
      payload: { id, isNoteInBin },
    });
  };

  return (
    <div className=" w-[250px] border-2 border-gray-400 flex flex-col p-3  rounded-lg gap-2">
      <div className=" flex items-center justify-between  border-b-2 border-gray-300 p-1">
        <h2 className="">{note.title}</h2>
        {!isNoteInArchive && !isNoteInBin && (
          <button onClick={() => onPinclick(note.id)}>
            {note.isPinned ? (
              <TbPinnedFilled size={20} />
            ) : (
              <VscPinned size={20} />
            )}
          </button>
        )}
      </div>
      <div className=" flex  flex-col p-1">
        <p>{note.text}</p>
        <div className=" flex gap-3 ml-auto ">
          {isNoteInBin ? (
            <></>
          ) : (
            <button
              onClick={() => onArchiveClick(note.id)}
              className={`${isNoteInArchive ? " text-amber-400" : ""}`}
            >
              <RiInboxArchiveLine size={20} />
            </button>
          )}

          <button onClick={() => onBinClick(note.id)}>
            <AiOutlineDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
