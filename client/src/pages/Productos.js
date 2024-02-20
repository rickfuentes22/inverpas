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

const Productos = () => {
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
                <Nav.Link href="/productos" style={{ color: "white", fontSize: "13px" }}>
                <FontAwesomeIcon icon={faBox} style={{ marginRight: "5px" }} />
                  PRODUCTOS
                </Nav.Link>
                <Nav.Link href="/blog" style={{ color: "white", fontSize: "13px" }}>
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

      <div style={{ backgroundImage: "url('/rio.jpg')" }}>
        <div class="container">
          <div className="content" style={{ marginTop: "65px" }}>
            <h2 class="titulo-servicios">PRODUCTOS</h2>
            <h5>
            Soluciones integrales de Gestión del Agua que comienzan con el Diseño

            </h5>
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
  );
};

export default Productos;
