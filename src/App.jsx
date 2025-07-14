import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Aboutus from './pages/Aboutus';
import Blog from './pages/Blog'
import Agents from './pages/Agents'
import Contact from './pages/Contact'
import Login from './pages/Login'
import LeadPool from './dashboards/LeadPoolDash'
import Agent from './dashboards/AgentDash'
import Worker from "./dashboards/WorkerDash";

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
        <Route path="/leadpooldash" element={<LeadPool />} />
        <Route path="/agentdash" element={<Agent />} />
        <Route path="/workerdash" element={<Worker />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;