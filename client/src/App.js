<<<<<<< HEAD
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
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
>>>>>>> 6833c90c731da18e46a958ef8a2b1f1a58de76bf
  );
}

export default App;
