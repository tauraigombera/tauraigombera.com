import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import About from "./components/pages/About";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <body className="bg-body text-white font-poppins">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </body>
    </>
  );
}

export default App;
