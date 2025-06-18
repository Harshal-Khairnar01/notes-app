import React from "react";
import Sidebar from "../../components/Sidebar";
import NotesInputform from "../../components/NotesTnputForm";
import Navbar from "../../components/Navbar";
import { useNotes } from "../../context/notes.context";
import NotesCard from "../../components/NotesCard";

const Important = () => {
  const { important } = useNotes();
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="ml-[80px] lg:ml-[160px] mt-[64px] h-[calc(100vh-64px)] overflow-y-auto p-4 bg-[var(--color-secondary)] dark:bg-[var(--color-secondary-d)]">
        <div className="  w-8/9 p-2 flex flex-col">
          <NotesInputform isImportantPage={true} />
          <div className=" mt-10">
            <h2 className=" text-2xl text-center text-[var(--color-head)] dark:text-[var(--color-head-d)]">
              Important Notes
            </h2>
            {
              <div className="justify-center lg:justify-normal  mt-2 flex flex-wrap gap-4">
                {important?.length > 0 &&
                  important.map((note) => (
                    <NotesCard key={note.id} note={note} />
                  ))}
              </div>
            }
          </div>
        </div>
      </main>
    </>
  );
};

export default Important;
