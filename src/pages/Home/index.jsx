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
      <Sidebar />

      <main className="ml-[80px] lg:ml-[160px] mt-[64px] h-[calc(100vh-64px)] overflow-y-auto p-4  bg-[var(--color-secondary)] dark:bg-[var(--color-secondary-d)]">
        <h1 className=" text-2xl px-5 font-semibold text-[var(--color-head)] dark:text-[var(--color-head-d)]">
          Add Notes
        </h1>
        <div className=" w-8/9 p-2 flex flex-col ">
          <NotesInputform />
        </div>

        {pinnedNotes?.length > 0 && (
          <div className="mt-10">
            <h2 className=" text-[var(--color-head)] dark:text-[var(--color-head-d)]  font-semibold  text-lg">
              Pinned Notes
            </h2>
            <div className=" mt-2 flex flex-wrap gap-4">
              {pinnedNotes.map((note) => (
                <NotesCard key={note.id} note={note} />
              ))}
            </div>
          </div>
        )}
        {otherNotes?.length > 0 && (
          <div className="mt-10">
            <h2 className=" text-[var(--color-head)] dark:text-[var(--color-head-d)]  font-semibold  text-lg">
              Other Notes
            </h2>
            <div className=" mt-2 flex flex-wrap gap-4">
              {otherNotes.map((note) => (
                <NotesCard key={note.id} note={note} />
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
