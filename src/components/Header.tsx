import { Link } from "react-router-dom";
import DiscoverForm from "./DiscoverForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      {" "}
      <DiscoverForm />
      {/* <Link to="/">Movies</Link> */}
    </div>
  );
};

export default Header;
