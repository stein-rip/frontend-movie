import "./App.css";
import Home from "./components/Home";
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Details from "./components/Details";
import Favorites from "./components/Favorites";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movies/favorites" element={<Favorites />} />
					<Route path="/movies/:id" element={<Details />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
