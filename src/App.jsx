import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Skill from "./pages/skill/Skill";
import Admission from "./pages/admission/Admission";
import Preparation from "./pages/preparation/Preparation";
import Batch from "./pages/batch/Batch";
import Header from "./components/header/Header";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/preparation" element={<Preparation />} />
        <Route path="/batch" element={<Batch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
