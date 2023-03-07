import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    navigate(`/?${new URLSearchParams({ search: searchTerm })}`);
    setSearchTerm("");
  };

  return (
    <form className="SearchForm" onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
