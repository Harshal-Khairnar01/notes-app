import React from "react";

import { VscPinned } from "react-icons/vsc";
import { RiInboxArchiveLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { useNotes } from "../../context/notes.context";
import { TbPinnedFilled } from "react-icons/tb";
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { findNotesInBin } from "../../utils/findNotesInBin";
import { findIsNoteImportant } from "../../utils/findIsNoteImportant";

const NotesCard = ({ note }) => {
  const { notesDispatch, archive, bin, important } = useNotes();

  const isNoteInArchive = findNotesInArchive(archive, note.id);

  const isNoteInBin = findNotesInBin(bin, note.id);

  const isNoteImportant = findIsNoteImportant(important, note.id);

  const onPinclick = (id) => {
    notesDispatch({
      type: "PIN",
      payload: { id },
    });
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
    <div className=" w-[300px] border   bg-[var(--color-card)] dark:bg-[var(--color-card-d)] flex flex-col px-3 py-2  rounded-lg gap-2  shadow-2xl hover:scale-[1.02]  duration-300">
      <div className=" flex items-center justify-between  border-b border-gray-500 p-1 ">
        <h2 className=" text-lg text-gray-950">{note.title}</h2>
        {!isNoteInArchive && !isNoteInBin && !isNoteImportant && (
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
        <p className=" text-gray-700">{note.text}</p>

        <div className="mt-3 flex justify-between">
          {isNoteImportant && (
            <span className=" bg-[var(--color-head)] text-[var(--color-card)] px-2 py-1 rounded-full text-xs">
              Important
            </span>
          )}

          <div className="  flex gap-3 ml-auto ">
            {isNoteInBin || isNoteImportant ? (
              <></>
            ) : (
              <button
                onClick={() => onArchiveClick(note.id)}
                className={`${
                  isNoteInArchive ? " text-[var(--color-accent)]" : ""
                }`}
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
    </div>
  );
};

export default NotesCard;
