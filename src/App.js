import { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import { createContext } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

export const NotesAdd = createContext();

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note.",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note.",
      date: "20/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note.",
      date: "30/05/2021",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };

    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="app">
        <Header setDarkMode={setDarkMode} />
        <Search setSearchText={setSearchText} />
        <NotesAdd.Provider value={{ addNote, deleteNote }}>
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText.toLowerCase())
            )}
          />
        </NotesAdd.Provider>
      </div>
    </div>
  );
}

export default App;
