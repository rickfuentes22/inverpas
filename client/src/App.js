import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auto from "./pages/Auto";
import Certificaciones from "./pages/Certificaciones";
import Diseno from "./pages/Diseno";
import EstudioCaudal from "./pages/EstudioCaudal";
import HomePage from "./pages/HomePage";
import Instalaciones from "./pages/Instalaciones";
import Moni from "./pages/Moni";
import Productos from "./pages/Productos";
import Topografia from "./pages/Topografia";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/estudiocaudal" element={<EstudioCaudal />} />
        <Route path="/auto" element={<Auto />} />
        <Route path="/moni" element={<Moni />} />
        <Route path="/diseno" element={<Diseno/>} />
        <Route path="/instalaciones" element={<Instalaciones/>} />
        <Route path="/certificaciones" element={<Certificaciones/>} />
        <Route path="/topografia" element={<Topografia/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/productos" element={<Productos/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
