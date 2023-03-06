import { FormEvent, useState } from "react";
import Movies from "../models/Movies";
import "./SearchForm.css";

const SearchForm = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="SearchForm" onSubmit={(e) => onSubmit(e)}>
      <input type="text" name="search" id="search" placeholder="search" />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
