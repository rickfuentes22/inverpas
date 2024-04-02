import React, { useState } from "react";
import "../styles/Footer.css";
import { message } from "antd"; // Importa el componente message de Ant Design

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/contacto/guardar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json(); // Parsea la respuesta JSON del servidor

      if (!response.ok) {
        throw new Error(data.mensaje || "Error al enviar el formulario");
      }

      // Limpiar el formulario después de enviar los datos
      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: ""
      });

      // Muestra el mensaje de éxito al usuario
      message.success(data.mensaje);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      // Muestra el mensaje de error al usuario
      message.error(error.message || "Hubo un error al enviar el formulario");
    }
  };

  return (
    <div className="footer" id="footer">
      {/* SOCIAL MEDIA */}
      <div className="contactinver">
        <img src="/logo_login.svg"></img>
        <div className="datosinverpas">
          <h4>
            <FontAwesomeIcon icon={faLocationDot} /> San dionisio 2670, Santiago Centro
          </h4>
          <h4>
            <FontAwesomeIcon icon={faEnvelope} /> ventas@inverpas.com
          </h4>
          <h4>
            <FontAwesomeIcon icon={faEnvelope} /> ventas@inverpas.com
          </h4>
          <a href="https://wa.me/+56937297778" target="_blank" rel="noopener noreferrer">
            <h4>
              <FontAwesomeIcon icon={faWhatsapp} /> +56 9 3729 7778{" "}
            </h4>
          </a>
          <a href="https://wa.me/+56988249970" target="_blank" rel="noopener noreferrer">
            <h4>
              <FontAwesomeIcon icon={faWhatsapp} /> +56 9 8824 9970{" "}
            </h4>
          </a>
        </div>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/your_instagram_page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/iglogo.png" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/your_facebook_page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/fblogo.png" alt="Facebook" />
          </a>
        </div>
      </div>
      {/* CÓDIGO DEL FORMULARIO */}
      <div className="footer-contact">
        <h3>CONTÁCTANOS</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Escribe tu nombre aquí"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="Escribe tu correo electrónico aquí"
              value={formData.correo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono (opcional)</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Escribe tu numero telefonico aquí"
              value={formData.telefono}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Tu mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Dejanos un mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
