import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill"; // Importar ReactQuill
import "react-quill/dist/quill.snow.css"; // Importar estilos de Quill

const EditarNoticiaForm = ({ onNoticiaUpdated }) => {
  const { id } = useParams();
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        if (!id) return;
        const response = await axios.get(`/api/noticias/${id}`);
        const { title, content } = response.data;
        setTitulo(title);
        setContenido(content);
      } catch (error) {
        console.error("Error fetching noticia:", error);
      }
    };

    fetchNoticia();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", titulo);
      formData.append("content", contenido);
      formData.append("imagenNoticia", imagen);

      const response = await axios.put(`/api/noticias/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      window.location.href = '/blog'; // Redirigir al componente Blog
    } catch (error) {
      console.error("Error updating noticia:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </label>
      <label>
        Contenido:
        {/* Usar ReactQuill para el campo de contenido */}
        <ReactQuill theme="snow" value={contenido} onChange={setContenido} />
      </label>
      <div>
        <label>Imagen:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files[0])}
        />
      </div>
      <button type="submit">Guardar Cambios</button>
    </form>
  );
};

export default EditarNoticiaForm;
