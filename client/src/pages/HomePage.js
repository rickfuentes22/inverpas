import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import { Nav, NavDropdown } from "react-bootstrap";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faWater,
  faMagnifyingGlassChart,
  faBolt,
  faCertificate,
  faWrench,
  faIdBadge,
  faChevronUp,
  faBlog,
  faBox
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
        setIsTransparent(true); // Cambiar a true para aplicar opacidad
      } else {
        setIsTransparent(false); // Cambiar a false para aplicar color sólido
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollToFooter = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    };

    const contactLink = document.getElementById("contact-link");
    if (contactLink) {
      contactLink.addEventListener("click", scrollToFooter);
    }

    return () => {
      if (contactLink) {
        contactLink.removeEventListener("click", scrollToFooter);
      }
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
                    <span style={{ color: "white" }}>
                      <img
                        src="/pipe.png"
                        width="18"
                        height="18"
                        className="pipe"
                        alt=""
                        style={{
                          filter: "brightness(1.5) contrast(2) invert(1)",
                        }}
                      />
                      SERVICIOS
                    </span>
                  }
                  style={{ fontSize: "13px", marginRight: "1px" }}
                  drop="down"
                >
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <Link
                      to="/estudiocaudal"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <FontAwesomeIcon icon={faWater} /> Estudios de caudales
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <Link
                      to="/auto"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img
                        src="/automa.png"
                        width="20"
                        height="20"
                        className="telegraf"
                        alt=""
                      />
                      Automatización
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <Link
                      to="/moni"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <FontAwesomeIcon icon={faMagnifyingGlassChart} />{" "}
                      Monitorización
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <Link
                      to="/diseno"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <FontAwesomeIcon icon={faWrench} /> Diseño mecánico
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <Link
                      to="/instalaciones"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <FontAwesomeIcon icon={faBolt} /> Instalaciones electricas
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <Link
                      to="/certificaciones"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <FontAwesomeIcon icon={faCertificate} /> Certificaciones
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ fontSize: "14px" }}>
                    <Link
                      to="/topografia"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img
                        src="/telegraf.png"
                        width="20"
                        height="20"
                        className="telegraf"
                        alt=""
                      />
                      Topografía
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  href="/productos"
                  style={{ color: "white", fontSize: "13px" }}
                >
                  <FontAwesomeIcon
                    icon={faBox}
                    style={{ marginRight: "5px" }}
                  />
                  PRODUCTOS
                </Nav.Link>
                <Nav.Link
                  href="/blog"
                  style={{ color: "white", fontSize: "13px" }}
                >
                  <FontAwesomeIcon
                    icon={faBlog}
                    style={{ marginRight: "5px" }}
                  />
                  BLOG
                </Nav.Link>
                 <Nav.Link id="contact-link" style={{ color: "white", fontSize: "13px" }}>
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
        //
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
                <img src="/cau.jpg" class="card-img-top" alt="..." />
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
                <img src="/dis.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Diseño mecánico</h5>
                </div>
              </Link>
            </div>
            <div class="card position-relative">
              <Link to="/instalaciones">
                <img src="/inst.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Instalaciones eléctricas </h5>
                </div>
              </Link>
            </div>
            <div className="card position-relative">
              <Link to="/certificaciones">
                <img src="/cert.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Certificaciones</h5>
                </div>
              </Link>
            </div>
            <div class="card position-relative">
              <Link to="/topografia">
                <img src="/topografia.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Topografía</h5>
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
                <h5 class="card-title">Producto</h5>
              </div>
            </div>
            <div class="card position-relative">
              <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Producto</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="footer" id="footer">
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