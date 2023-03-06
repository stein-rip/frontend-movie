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
      {/* <input
        type="text"
        name="genre"
        id="genre"
        placeholder="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      /> */}
<select name="genre" id="genre"> 
<option value="28">Action</option>
      <option value="12">Adventure</option>
      <option value="16">Animation</option>
      <option value="35">Comedy</option>
      <option value="80">Crime</option>
      <option value="99">Documentary</option>
      <option value="18">Drama</option>
      <option value="10751">Family</option>
      <option value="14">Fantasy</option>
      <option value="36">History</option>
      <option value="27">Horror</option>
      <option value="10402">Music</option>
      <option value="9648">Mystery</option>
      <option value="10749">Romance</option>
      <option value="878">Sci-fi</option>
      <option value="10770">TV movie</option>
      <option value="53">Thriller</option>
      <option value="10752">War</option>
      <option value="37">Western</option>
</select>


  



      <label htmlFor="rating">⭐️</label>
<select id="rating" name="rating" onChange={(e) => setRating(e.target.value)}>
  
<option value="1">1 + Stars</option>
<option value="2">2 + Stars</option>
<option value="3">3 + Stars</option>
<option value="4">4 + Stars</option>
<option value="5">5 + Stars</option>
<option value="6">6 + Stars</option>
<option value="7">7 + Stars</option>
<option value="8">8 + Stars</option>
<option value="9">9 + Stars</option>
<option value="10">10 Stars</option>
</select>
{/* 
      <input
        type="text"
        name="length"
        id="length"
        placeholder="length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      /> */}

<select id="length" name="length" onChange={(e) => setLength(e.target.value)}>
  
  <option value="30">30 minutes</option>
  <option value="60">60 minutes</option>
  <option value="90">90 minutes</option>
  <option value="120">120 minutes</option>
  <option value="180">180 minutes</option>
  <option value="240">240 minutes</option>
  </select>

      <button>Submit</button>
    </form>
  );
};

export default DiscoverForm;
