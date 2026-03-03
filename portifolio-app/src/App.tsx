import Home from "./components/pages/Home";
import BlogList from "./components/pages/BlogList";
import BlogPost from "./components/pages/BlogPost"
import About from "./components/pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-body text-white font-poppins">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
