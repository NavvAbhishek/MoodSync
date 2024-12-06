import { useState } from "react";

const PopupBox = ({ onSubmit }) => {
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    onSubmit(note);
    setNote(''); // Optionally clear the textarea after submit
  };

  return (
    <div>
      <h2 className="text-base font-semibold pb-1">Add note</h2>
      <textarea
        className="border-2 border-black rounded-lg p-1"
        rows={3}
        cols={30}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div>
        <button className="purpleBtn !px-[10px] !py-2"  onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default PopupBox;
