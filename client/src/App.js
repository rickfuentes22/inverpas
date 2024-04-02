import React from "react";
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
import Login from "./pages/Login";
import Mensajeria from "./pages/Mensajeria";
import NewsDetail from "./pages/NewsDetail"; 
import AgregarNoticiaForm from "./pages/AgregarNoticiasForm";
import EditarNoticiaForm from "./pages/EditarNoticiaForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/estudiocaudal" element={<EstudioCaudal />} />
        <Route path="/auto" element={<Auto />} />
        <Route path="/moni" element={<Moni />} />
        <Route path="/diseno" element={<Diseno />} />
        <Route path="/instalaciones" element={<Instalaciones />} />
        <Route path="/certificaciones" element={<Certificaciones />} />
        <Route path="/topografia" element={<Topografia />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mensajeria" element={<Mensajeria />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/agregar-noticia" element={<AgregarNoticiaForm />} />
        <Route path="/editar-noticia/:id" element={<EditarNoticiaForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
