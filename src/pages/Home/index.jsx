import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";


import NotesCard from "../../components/NotesCard";
import { useNotes } from "../../context/notes.context";
import NotesInputform from "../../components/NotesTnputForm";

const Home = () => {
  const { notes } = useNotes();

  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  return (
    <>
      <Navbar />
      <main className=" flex gap-2   ">
        <div className=" w-1/9">
          <Sidebar />
        </div>
        <div className="  w-8/9 p-2 flex flex-col">
          <NotesInputform />

          {pinnedNotes?.length > 0 && (
            <div className=" mt-10">
              <h2>Pinned Notes</h2>
              <div className=" mt-2 flex flex-wrap gap-4">
                {pinnedNotes?.length > 0 &&
                  pinnedNotes.map((note) => (
                    <NotesCard key={note.id} note={note} />
                  ))}
              </div>
            </div>
          )}
          {otherNotes?.length > 0 && (
            <div className=" mt-10">
              <h2>Other Notes</h2>

              {
                <div className=" mt-2 flex flex-wrap gap-4">
                  {otherNotes?.length > 0 &&
                    otherNotes.map((note) => (
                      <NotesCard key={note.id} note={note} />
                    ))}
                </div>
              }
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
