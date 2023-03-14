import "./search-box.css";

export const SearchBox = ({ placeholder, handleChangeEvt }) => {
  return (
    <div className="search-container">
      <h1 className="title">Robots Rolodex</h1>
      <input
        type="search"
        placeholder={placeholder}
        onChange={handleChangeEvt}
      />
    </div>
  );
};
