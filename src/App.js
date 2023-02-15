import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Wordpress from "./pages/wordpress/Wordpress";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="wordpress" element={<Wordpress />} />
        <Route exact path="services" element={<Services />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;

// https://www.freecodecamp.org/news/how-to-use-react-router-version-6/#:~:text=How%20to%20Install%20React%20Router%20To%20install%20React,yarn%20then%20use%20this%20command%3A%20yarn%20add%20react-router-dom%406.
