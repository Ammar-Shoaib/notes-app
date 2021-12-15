import { useContext, useState } from "react";
import { NotesAdd } from "../App";

const AddNote = () => {
  const { addNote } = useContext(NotesAdd);

  const [noteText, setNoteText] = useState("");
  const charLimit = 200;

  const handleChange = (e) => {
    const { value } = e.target;
    if (charLimit - value.length >= 0) {
      setNoteText(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim().length > 0) {
      addNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        name="text"
        value={noteText}
        onChange={handleChange}
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
      />
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button onClick={handleSubmit} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
