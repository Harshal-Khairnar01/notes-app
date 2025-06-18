import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { AiOutlinePlusCircle } from "react-icons/ai";

import NotesCard from "../../components/NotesCard";
import { useNotes } from "../../context/notes.context";

const Home = () => {
  const { title,archive, text, notes, notesDispatch } = useNotes();

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
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };

  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

    console.log(archive)

  return (
    <>
      <Navbar />
      <main className=" flex gap-2   ">
        <div className=" w-1/9">
          <Sidebar />
        </div>
        <div className="  w-8/9 p-2 flex flex-col">
          <div className="  self-center flex flex-col w-[450px] relative border-2 rounded-md border-gray-400 gap-2 p-2">
            <input
              type="text"
              value={title}
              onChange={onTitleChange}
              placeholder="Enter title"
              className=" outline-none"
            />
            <textarea
              value={text}
              onChange={onTextChange}
              placeholder="Enter Text"
              rows={3}
              className=" outline-none"
            ></textarea>
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className={` ${
                title.length === 0 ? " cursor-not-allowed" : "cursor-pointer"
              } absolute bottom-1 right-1 bg-white`}
            >
              <AiOutlinePlusCircle size={24} />
            </button>
          </div>

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
        </div>
      </main>
    </>
  );
};

export default Home;
