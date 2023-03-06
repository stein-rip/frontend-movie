import "./Card.css";

interface Prop {
  title: string;
  overview: string;
  poster_path: string;
}
const Card = ({ title, overview, poster_path }: Prop) => {
  return (
    <li className="Card">
      <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt={title} />
      <p>{title}</p>
    </li>
  );
};

export default Card;
