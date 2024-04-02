import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Mensajeria.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTop from "react-scroll-to-top";

const Mensajeria = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 50) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetch("/api/contacto/mensajes") // Ruta para obtener mensajes
      .then((response) => response.json())
      .then((data) => {
        setMensajes(data);
      })
      .catch((error) => {
        console.error("Error fetching mensajes:", error);
      });
  }, []);

  return (
    <div style={{ marginTop: "66px" }}>
      <Navbar />  

      <div style={{ backgroundImage: "url('/')" }}>
        <div className="containerMensajes">
          <div className="contentMensajes" style={{ marginTop: "65px" }}>
            <h2 className="titulo-serviciosMensajes">Mensajeria</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Teléfono</th>
                  <th>Mensaje</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {mensajes.map((mensaje) => (
                  <tr key={mensaje._id}>
                    <td>{mensaje.nombre}</td>
                    <td>{mensaje.correo}</td>
                    <td>{mensaje.telefono}</td>
                    <td>{mensaje.mensaje}</td>
                    <td>{mensaje.fecha}</td>
                    <td>
                      <button>Editar</button>
                      <button>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ScrollToTop smooth className="scrollToTopButton">
          <FontAwesomeIcon icon={faChevronUp} />
          Scroll To Top
        </ScrollToTop>
      </div>
      <a
        href="https://wa.me/+56988249970"
        className="whatsapp-float"
        target="_blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      </a>
      <Footer/>
    </div>
  );
};

export default Mensajeria;
