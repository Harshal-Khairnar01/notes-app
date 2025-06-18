import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useNotes } from "../../context/notes.context";
import NotesCard from "../../components/NotesCard";

const Archive = () => {
  const { archive } = useNotes();

  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="ml-[80px] lg:ml-[160px] mt-[64px] h-[calc(100vh-64px)] overflow-y-auto p-4  bg-[var(--color-secondary)] dark:bg-[var(--color-secondary-d)]">
        <div className="  w-8/9 p-4 flex flex-col">
          <div className=" justify-center lg:justify-normal mt-2 flex flex-wrap gap-4">
            {archive?.length > 0 ? (
              archive.map((note) => <NotesCard key={note.id} note={note} />)
            ) : (
              <div>
                <h1 className=" text-3xl text-[var(--color-head)] dark:text-[var(--color-head-d)] ">
                  Noting in Archive!
                </h1>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Archive;
