import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import Hobbies from "./about/Hobbies";
import Portfolio from "./portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<Hobbies />} />
          <Route path="projects" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
