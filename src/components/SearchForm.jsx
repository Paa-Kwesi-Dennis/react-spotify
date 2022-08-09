import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      alert("Search Input Must Be Valid");
      return;
    }
    onSearch(search);
    setSearch("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label className="h3" htmlFor="artist">
          Search Here
        </label>
        <input
          type="text"
          className="form-control"
          id="artist"
          name="artist"
          placeholder="Search for artist, song title or album name "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button id="btn" className="btn btn-primary btn-lg mb-4 mt-2">
          Find
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
