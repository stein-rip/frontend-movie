import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DiscoverForm.css";

const DiscoverForm = () => {
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [length, setLength] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = {
      ...(genre ? { genre: parseInt(genre) } : {}),
      ...(rating ? { rating: parseInt(rating) } : {}),
      ...(length ? { length: parseInt(length) } : {}),
    };
    navigate(`/?${new URLSearchParams(params as any)}`);
    setGenre("");
    setRating("");
    setLength("");
  };

  return (
    <form className="DiscoverForm" onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        name="genre"
        id="genre"
        placeholder="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <input
        type="text"
        name="rating"
        id="rating"
        placeholder="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <input
        type="text"
        name="length"
        id="length"
        placeholder="length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default DiscoverForm;
