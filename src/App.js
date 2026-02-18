import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Glob from "./pages/globe";
import Tries from "./pages/tries";
import Concert from "./pages/concert";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tries" element={<Tries />} />
      <Route path="/concert" element={<Concert />} />

      <Route path="/travel" element={<Glob />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </Router>
);
export default App;
