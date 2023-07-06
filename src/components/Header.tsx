import { Link } from "react-router-dom";
import DiscoverForm from "./DiscoverForm";
import logo from "../images/logo.png";
import "./Header.css";
import CardList from "./Cardlist";
import SearchForm from "./SearchForm";

const Header = () => {
	return (
		<div className="Header">
			{" "}
			<Link to="/">
				<img className="image" src={logo} alt="" />
			</Link>
			<DiscoverForm />
			{/* <Link to="/">Movies</Link> */}
			<div className="Home">
				<SearchForm />
				<Link to="/movies/favorites">
					<button>Favorites</button>
				</Link>
				<Link to="/">
					<button>Home</button>
				</Link>
			</div>
		</div>
	);
};

export default Header;
