import { Link } from "react-router-dom";
import DiscoverForm from "./DiscoverForm";
import logo from "../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      {" "}
      <Link to="/">
        <img className="image" src={logo} alt="" />
      </Link>
      <DiscoverForm />
      {/* <Link to="/">Movies</Link> */}
    </div>
  );
};

export default Header;
