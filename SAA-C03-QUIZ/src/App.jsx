import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Wrong from "./pages/Wrong";

export default function App() {
  return (
    <Router>
      <div className="nav-bar">
        <Link to="/">전체</Link>
        <Link to="/saved">⭐ 저장</Link>
        <Link to="/wrong">❌ 오답</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/wrong" element={<Wrong />} />
      </Routes>
    </Router>
  );
}
