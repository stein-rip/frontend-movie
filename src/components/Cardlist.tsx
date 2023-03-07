import { Movie } from "../models/Movie";
import Card from "./Card";
import "./CardList.css";

interface Props {
  allmovies: Movie[];
}

const CardList = ({ allmovies }: Props) => {
  return (
    <ul className="CardList">
      {allmovies.map((item) => (
        <Card movie={item} />
      ))}
    </ul>
  );
};

export default CardList;
