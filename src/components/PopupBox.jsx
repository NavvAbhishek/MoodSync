import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { MdClose } from "react-icons/md";

const PopupBox = ({ onClose, onSubmitNote, initialNote = "" }) => {
  const [note, setNote] = useState("");
  const isEditing = initialNote !== "";

  useEffect(() => {
    setNote(initialNote);
  }, [initialNote]);

  const handleSubmit = () => {
    onSubmitNote(note);
    setNote("");
    onClose();
  };

  return (
    <Popup open={true} closeOnDocumentClick onClose={onClose} className="">
      <div className="modal custom-popup">
        <div className="flex justify-between pb-3">
          <h2 className="text-base font-semibold pb-1 text-yellow">
            {isEditing ? "Edit note" : "Add note"}
          </h2>
          <button className="close cursor-pointer" onClick={onClose}>
            <MdClose />
          </button>
        </div>
        <textarea
          className="border-2 border-black rounded-lg p-1 text-black"
          rows={3}
          cols={30}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <div className="actions">
          <button className="purpleBtn !px-[10px] !py-2" onClick={handleSubmit}>
            {isEditing ? "Update" : "Add"}
          </button>
          <button className="purpleBtn !px-[10px] !py-2" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default PopupBox;
