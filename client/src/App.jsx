import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex justify-around">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/categories" className="hover:text-yellow-400">Categories</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
