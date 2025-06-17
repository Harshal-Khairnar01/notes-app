import React, { useReducer } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import {
  AiOutlineDelete,
  AiOutlineImport,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { notesReducer } from "../../reducers/notesReducer";
import { FaThumbsDown, FaThumbtack } from "react-icons/fa";
import { FaThumbtackSlash } from "react-icons/fa6";
import { BsArchive } from "react-icons/bs";
import { VscPinned } from "react-icons/vsc";
import { RiInboxArchiveLine } from "react-icons/ri";

const Home = () => {
  const initialstate = {
    title: "",
    text: "",
    notes: "",
   
  };

  const [{ title, text, notes }, notesDispatch] = useReducer(
    notesReducer,
    initialstate
  );

  console.log(notes);

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

  return (
    <>
      <Navbar />
      <main className=" flex gap-2  ">
        <div className=" w-1/9">

        <Sidebar />
        </div>
        <div className="  w-8/9 p-2">
          <div className=" flex flex-col w-[350px] relative border-2 rounded-md border-gray-400 gap-2 p-2">
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
              name=""
              id=""
              className=" outline-none"
            ></textarea>
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className={` ${
                title.length === 0 ? " cursor-not-allowed" : "cursor-pointer"
              } absolute bottom-0 right-0`}
            >
              <AiOutlinePlusCircle size={24} />
            </button>
          </div>

          <div className=" mt-20 flex flex-wrap gap-4">
            {notes?.length > 0 &&
              notes.map((note) => (
                <div
                  className=" w-[250px] border-2 border-gray-400 flex flex-col p-3  rounded-lg gap-2"
                  key={note.id}
                >
                  <div className=" flex items-center justify-between  border-b-2 border-gray-300 p-1">
                    <h2 className="">{note.title}</h2>
                    <VscPinned size={20} />
                  </div>
                  <div className=" flex  flex-col p-1">
                    <p>{note.text}</p>
                    <div className=" flex gap-3 ml-auto ">
                      <RiInboxArchiveLine size={20} />
                      <AiOutlineDelete size={20} />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
