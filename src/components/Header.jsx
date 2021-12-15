const Header = ({ setDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="save" onClick={() => setDarkMode((prev) => !prev)}>
        Toggle Button
      </button>
    </div>
  );
};

export default Header;
