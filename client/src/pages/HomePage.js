import React, { useState, useEffect } from 'react';
import "../styles/HomePage.css";
import { Nav, NavDropdown } from "react-bootstrap";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHome, faWater, faMagnifyingGlassChart, faBolt, faCertificate, faWrench, faIdBadge, faChevronUp} from '@fortawesome/free-solid-svg-icons'; // Aquí elimina la importación duplicada
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ScrollToTop from 'react-scroll-to-top';

const HomePage = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 50) {
        setIsTransparent(true); // Cambiar a true para aplicar opacidad
      } else {
        setIsTransparent(false); // Cambiar a false para aplicar color sólido
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navnav">
      <div className="navbar-wrapper">
        <nav
          className={`navbar navbar-expand-lg fixed-top ${
            isTransparent
              ? "navbar-dark bg-dark navbar-opaque"
              : "navbar-dark bg-dark"
          }`}
        >
          <div className="container-fluid">
            <img
              src="/Inver.png"
              width="50"
              height="50"
              className="rounded"
              alt=""
            />
            <a className="navbar-brand" href="#">
              INVERPAS
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <Nav className="mx-auto">
                <Nav.Link href="/" style={{ color: "white", fontSize: "13px" }}>
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ marginRight: "5px" }}
                  />
                  INICIO
                </Nav.Link>

                <NavDropdown
                  title={
                    <span
                      style={{
                        color: "white",
                      }}
                    >
                      SERVICIOS
                    </span>
                  }
                  style={{ fontSize: "13px", marginRight: "1px" }}
                  drop="down"
                >
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <FontAwesomeIcon icon={faWater} /> Estudios de caudales
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <img
                      src="/automa.png"
                      width="20"
                      height="20"
                      className="telegraf"
                      alt=""
                    />
                    Automatización
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <FontAwesomeIcon icon={faMagnifyingGlassChart} />{" "}
                    Monitorización
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <FontAwesomeIcon icon={faWrench} /> Diseño mecánico
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <FontAwesomeIcon icon={faBolt} /> Instalaciones electricas
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <FontAwesomeIcon icon={faCertificate} /> Certificaciones
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <img
                      src="/telegraf.png"
                      width="20"
                      height="20"
                      className="telegraf"
                      alt=""
                    />
                    Topografía
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <span style={{ color: "white" }}>INFRAESTRUCTURA</span>
                  }
                  style={{ fontSize: "13px", marginRight: "1px" }}
                  drop="down"
                >
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    Opción 1
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    Opción 2
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/" style={{ color: "white", fontSize: "13px" }}>
                  <FontAwesomeIcon
                    icon={faIdBadge}
                    style={{ marginRight: "5px" }}
                  />
                  CONTACTO
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </nav>
      </div>

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

      <div style={{ backgroundImage: "url('/wat.jpg')" }}>
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
                    Desarrollo tecnológico de más de 20 años en Telecontrol y
                    Automatización de canales y redes de distribución.
                  </h4>
                  <h7 class="card-text">
                    Inverpas, fruto de su I+D+i y de su experiencia de más de 20
                    años, ofrece al mercado una gama de productos de altas
                    prestaciones a medida de sus necesidades. Son sistemas de
                    alta fiabilidad, seguridad y sencillez de uso. Incorporan
                    las últimas tecnologías en telecontrol y automatización. La
                    empresa desarrolla proyectos dirigidos principalmente a la
                    GESTIÓN DE CANALES DE RIEGO, así como a usos industriales,
                    hidroeléctricos y mineros. Riegosalz nace en el mundo
                    agrícola, se desarrolla por las necesidades del regante y
                    avanza cada día incorporando las últimas novedades
                    tecnológicas.{" "}
                  </h7>
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
              <img src="/cau.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Estudios de caudales</h5>
              </div>
            </div>
            <div class="card position-relative">
              <img src="/auto.jpeg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Automatización</h5>
              </div>
            </div>
            <div class="card position-relative">
              <img src="/tele.jpeg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Telemetrias</h5>
              </div>
            </div>
            <div class="card position-relative">
              <img src="/pro.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Proyectos electricos</h5>
              </div>
            </div>
          </div>

          <div class="card-group">
            <div class="card position-relative">
              <img src="/dis.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Diseño mecánico</h5>
              </div>
            </div>
            <div class="card position-relative">
              <img src="/inst.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Instalaciones eléctricas </h5>
              </div>
            </div>
            <div class="card position-relative">
              <img src="/cert.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Certificaciones </h5>
              </div>
            </div>
            <div class="card position-relative">
              <img src="/topografia.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Topografía</h5>
              </div>
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
        <div class="container">
          <div class="content">
            <h2 class="titulo-servicios">Productos</h2>
          </div>
        </div>
        <div class="container">
          <div class="card-group">
            <div class="card position-relative">
              <img src="/cables.jpeg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Cables de bateria</h5>
              </div>
            </div>

            <div class="card position-relative">
              <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Producto 2</h5>
              </div>
            </div>
            <div class="card position-relative">
              <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Producto 3</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          {/* Footer section with improved styling */}
          <div className="footer-social">
            <a href="https://www.instagram.com/your_instagram_page">
              <img src="/iglogo.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/your_facebook_page">
              <img src="/fblogo.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
