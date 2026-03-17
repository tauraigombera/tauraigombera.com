import Home from "./components/pages/Home";
import BlogPage from "./components/pages/BlogPage";
import BlogPost from "./components/pages/BlogPost";
import About from "./components/pages/About";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray text-mytext font-atkinson font-mono min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<BlogPage />} />
          <Route path="/posts/:slug" element={<BlogPost />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;