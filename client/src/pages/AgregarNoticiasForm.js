import React, { useState } from "react";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../styles/AgregarNoticiaForm.css"; 

const AgregarNoticiaForm = ({ onNoticiaAdded }) => {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", titulo);
      formData.append("content", contenido); // Guarda el contenido en formato HTML
      formData.append("imagenNoticia", imagen);

      const response = await axios.post("/api/noticias", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onNoticiaAdded(response.data);
      setTitulo("");
      setContenido("");
      setImagen(null);
    } catch (error) {
      console.error("Error al agregar noticia:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="agregar-noticia-form">
      <h2>Agregar Noticia</h2>
      <div className="form-group">
        <label htmlFor="titulo">Título:</label>
        <input type="text" id="titulo" value={titulo} onChange={e => setTitulo(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="contenido">Contenido:</label>
        <ReactQuill 
          id="contenido" 
          value={contenido} 
          onChange={setContenido} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="imagen">Imagen:</label>
        <input type="file" id="imagen" name="imagen" accept="image/*" onChange={e => setImagen(e.target.files[0])} />
      </div>
      <button type="submit" className="btn-agregar-noticia">Agregar Noticia</button>
    </form>
  );
};

export default AgregarNoticiaForm;
