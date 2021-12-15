import { MdSearch } from "react-icons/md";

const Search = ({ setSearchText }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3rem" />
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
