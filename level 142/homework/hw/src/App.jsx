import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <nav className="bg-blue-500 text-white p-4 flex gap-4 justify-center">
        <Link to="/">მთავარი</Link>
        <Link to="/about">ჩვენს შესახებ</Link>
        <Link to="/services">სერვისები</Link>
        <Link to="/contact">კონტაქტი</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
