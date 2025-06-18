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
      <main className=" flex gap-2   ">
        <div className=" w-1/9">
          <Sidebar />
        </div>
        <div className="  w-8/9 p-2 flex flex-col">
          <NotesInputform isImportantPage={true} />
          <div className=" mt-10">
            <h2 className=" text-xl">Important Notes</h2>
            {
              <div className=" mt-2 flex flex-wrap gap-4">
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
