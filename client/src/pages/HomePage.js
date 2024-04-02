import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/HomePage.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const HomePage = () => {
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

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/telemetria.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/telemetria2.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/telemetria3.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div style={{ backgroundImage: "url('/')" }}>
        <div class="container">
          <div class="content">
            <h2 class="titulo-servicios">¿Quienes Somos?</h2>
            <h3 class="titulo-servicios">
              Telecontrol, Automatización y Telemetría de Compuertas de Canales
              y Redes de Distribución
            </h3>
          </div>
          <div class="card mb-5">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="/telemetria.png" class="imagentele" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h4 class="card-text">
                    Inverpas ingeniería es una empresa encargada en el
                    desarrollo tecnológico de automatización y control en área
                    residencial, industrial y agrícola. Nuestra empresa se
                    encuentra enfocada en telemetrías, automatización de
                    compuertas de canales de riego, regulación de caudales,
                    generación de energía solar, instalaciones eléctricas,
                    procesos industriales, análisis y tratamientos de agua.
                    Brindamos productos y servicios con la mejor calidad,
                    seguridad y sencillez de uso para lograr satisfacer las
                    necesidades de nuestra clientela.{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="content">
            <h2 class="titulo-servicios">¿Qué Servicios Ofrecemos?</h2>
            <h3 class="titulo-servicios">
              Tecnologías Aplicadas a la Agricultura y el Medio Ambiente
            </h3>
          </div>
        </div>
        <div class="container">
          <div class="card-group">
            <div class="card position-relative">
              <Link to="/estudiocaudal">
                <img src="/aguaa.jpeg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Estudios de caudales</h5>
                </div>
              </Link>
            </div>
            <div class="card position-relative">
              <Link to="/auto">
                <img src="/auto.jpeg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Automatización</h5>
                </div>
              </Link>
            </div>
            <div class="card position-relative">
              <Link to="/moni">
                <img src="/tele.jpeg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Monitorización</h5>
                </div>
              </Link>
            </div>
          </div>

          <div class="card-group">
            <div class="card position-relative">
              <Link to="/diseno">
                <img src="/diseno.jpeg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Diseño</h5>
                </div>
              </Link>
            </div>
            <div class="card position-relative">
              <Link to="/instalaciones">
                <img src="/inst.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Instalaciones </h5>
                </div>
              </Link>
            </div>
            <div className="card position-relative">
              <Link to="/certificaciones">
                <img src="/certificados.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Certificaciones</h5>
                </div>
              </Link>
            </div>            
          </div>

          <div>
            <div></div>
            <ScrollToTop smooth className="scrollToTopButton">
              <FontAwesomeIcon icon={faChevronUp} />
              Scroll To Top
            </ScrollToTop>
          </div>
        </div>{" "}
        {/* div final de imagen de fonde */}
        <a
          href="https://wa.me/+56988249970"
          className="whatsapp-float"
          target="_blank"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        </a>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;