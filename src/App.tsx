import "./App.css";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
};

export default App;
