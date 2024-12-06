import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { MdClose } from "react-icons/md";

const PopupBox = ({ onSubmit, onClose }) => {
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    onSubmit(note);
    setNote(""); // Optionally clear the textarea after submit
  };

  return (
    <Popup open={true} closeOnDocumentClick onClose={onClose} className="">
      <div className="modal custom-popup">
        <div className="flex justify-between pb-3">
          <h2 className="text-base font-semibold pb-1 text-yellow">Add note</h2>
          <button className="close cursor-pointer" onClick={onClose}>
            <MdClose />
          </button>
        </div>
        <textarea
          className="border-2 border-black rounded-lg p-1"
          rows={3}
          cols={30}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <div className="actions">
          <button className="purpleBtn !px-[10px] !py-2" onClick={handleSubmit}>
            Add
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
