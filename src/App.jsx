import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aboutus from './pages/Aboutus';
import Blog from './pages/Blog';
import Agents from './pages/Agents';
// import Contact from './pages/Contact';
import Login from './pages/Login';
import LeadPool from './dashboards/LeadPoolDash';
import Agent from './dashboards/AgentDash';
import Worker from "./dashboards/WorkerDash";
import Area from './pages/Area';
import LeadGeneration from './pages/LeadGeneration';
import Marketing from './pages/Marketing';
import WebDev from "./pages/WebDev";
import WorkerP from "./pages/Worker";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/agents" element={<Agents />} />
                <Route path="/worker" element={<WorkerP />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/login" element={<Login />} />
        
        {/* Dashboard Routes */}
        <Route path="/leadpooldash" element={<LeadPool />} />
        <Route path="/agentdash" element={<Agent />} />
        <Route path="/workerdash" element={<Worker />} />
        
        {/* Additional Pages */}
        <Route path="/area" element={<Area />} />
        <Route path="/lead-generation" element={<LeadGeneration />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/web-development" element={<WebDev />} />
        
        {/* 404 Page - Add this if you have one */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;