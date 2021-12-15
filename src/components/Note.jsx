import { MdDeleteForever } from "react-icons/md";
import { NotesAdd } from "../App";
import { useContext } from "react";

const Note = ({ id, text, date }) => {
  const { deleteNote } = useContext(NotesAdd);

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          size="1.3em"
          className="delete-icon"
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
