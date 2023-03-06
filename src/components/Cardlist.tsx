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
        <Card
          title={item.title}
          overview={item.overview}
          poster_path={item.poster_path}
        />
      ))}
    </ul>
  );
};

export default CardList;
