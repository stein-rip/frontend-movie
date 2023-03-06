import { FormEvent, useState } from "react";
import Movies from "../models/Movies";
import "./Form.css";

const Form = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="Form" onSubmit={(e) => onSubmit(e)}>
      <input type="text" name="search" id="search" placeholder="search" />
      <button>search</button>
    </form>
  );
};

export default Form;
