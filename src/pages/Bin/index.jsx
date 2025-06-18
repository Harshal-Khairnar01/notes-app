import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useNotes } from "../../context/notes.context";
import NotesCard from "../../components/NotesCard";

const Bin = () => {
  const { bin } = useNotes();

  return (
    <>
      <Navbar />
      <main className=" flex gap-2   ">
        <div className=" w-1/9">
          <Sidebar />
        </div>
        <div className="  w-8/9 p-4 flex flex-col">
          <div className=" mt-2 flex flex-wrap gap-4">
            {bin?.length > 0 ? (
              bin.map((note) => <NotesCard key={note.id} note={note} />)
            ) : (
              <div>
                <h1 className=" text-3xl">Noting in Bin!</h1>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Bin;
