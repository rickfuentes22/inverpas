import React, { useState, useEffect } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faWater, faMagnifyingGlassChart, faBolt, faCertificate, faWrench, faIdBadge, faBlog, faBox, faUsers, faUserGear, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isTransparent] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el token está activo


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

  useEffect(() => {
    const token = localStorage.getItem("token"); // Obtener el token del almacenamiento local
    if (token) {
      setIsLoggedIn(true); // Si hay un token, establece isLoggedIn en true
    } else {
      setIsLoggedIn(false); // Si no hay token, establece isLoggedIn en false
    }
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

                <Nav.Link
                  id="contact-link"
                  style={{ color: "white", fontSize: "13px" }}
                >
                  <FontAwesomeIcon
                    icon={faIdBadge}
                    style={{ marginRight: "5px" }}
                  />
                  CONTACTO
                </Nav.Link>

                <Nav.Link
                  href="https://clientes.inverpas.com/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", fontSize: "13px" }}
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    style={{ marginRight: "5px" }}
                  />
                  CLIENTES
                </Nav.Link>
                {isLoggedIn ? (
                  // Si el usuario está logueado, no mostrar el botón de Admin Login
                  <>
                    <Nav.Link
                      href="/mensajeria"
                      style={{ color: "white", fontSize: "13px" }}
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ marginRight: "5px" }}
                      />
                      MENSAJES
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => {
                        localStorage.removeItem("token");
                        setIsLoggedIn(false);
                        window.location.href = "/";                      }}
                      style={{ color: "white", fontSize: "13px" }}
                    >
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        style={{ marginRight: "5px" }}
                      />
                      CERRAR SESIÓN
                    </Nav.Link>
                  </>
                ) : (
                  // Si el usuario no está logueado, mostrar el botón de Admin Login
                  <Nav.Link
                    href="/login"
                    style={{ color: "white", fontSize: "13px" }}
                  >
                    <FontAwesomeIcon
                      icon={faUserGear}
                      style={{ marginRight: "5px" }}
                    />
                    ADMIN LOGIN
                  </Nav.Link>
                )}
              </Nav>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );};


export default Navbar;
