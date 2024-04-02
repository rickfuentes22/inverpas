import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/HomePage.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTop from "react-scroll-to-top";

const Auto = () => {
  const [isTransparent, setIsTransparent] = useState(true);

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

  return (
    <div style={{ marginTop: "66px" }}> {/* Asegura que el contenido comience después del navbar */}
      <Navbar />  

      <div style={{ backgroundImage: "url('/rio.jpg')" }}>
        <div class="container">
          <div className="content" style={{ marginTop: "65px" }}>
            <h2 class="titulo-servicios">Automatización </h2>
            <h5>Automatización de canales y redes de distribución de agua</h5>
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

export default Auto;
