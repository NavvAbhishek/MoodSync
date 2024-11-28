const PopupBox = () => {
  return (
    <div>
      <h2 className="text-base font-semibold pb-1">Add note</h2>
      <textarea
        className="border-2 border-black rounded-lg p-1"
        rows={3}
        cols={30}
      />
      <div>
        <button className="purpleBtn !px-[10px] !py-2">Add</button>
      </div>
    </div>
  );
};

export default PopupBox;
