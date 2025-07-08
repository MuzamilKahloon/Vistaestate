import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Aboutus from './pages/Aboutus';
import Blog from './pages/Blog'
import Agents from './pages/Agents'
import Contact from './pages/Contact'
import Login from './pages/Login'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/agents" element={<Agents />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />


      </Routes>
    </Router>
  );
};

export default App;
