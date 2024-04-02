import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AgregarNoticiaForm from "./AgregarNoticiasForm";
import "../styles/Blog.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTop from "react-scroll-to-top";

const Blog = () => {
  const [news, setNews] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLoggedIn();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/api/noticias");
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleNoticiaAdded = (newNoticia) => {
    setNews([...news, newNoticia]);
  };

  const handleDeleteNoticia = async (id) => {
    try {
      await axios.delete(`/api/noticias/${id}`);
      setNews(news.filter((noticia) => noticia._id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  const handleEditNoticia = (id) => {
    navigate(`/editar-noticia/${id}`);
  };

  return (
    <div style={{ marginTop: "67px" }}>
      <Navbar />
      <div className="blog-container">
        <div className="news-container">
          <h2>Noticias</h2>
          <div className="card-container-blog">
            {news.map((noticia) => (
              <div key={noticia._id} className="card-blog">
                <Link to={`/news/${noticia._id}`}>
                  
                  {noticia.imagenNoticia && (
                    <img src={`/uploads/${noticia.imagenNoticia}`} alt="Imagen de noticia" />
                  )}
                  <h3>{noticia.title}</h3>
                </Link>
                {isLoggedIn && (
                  <div className="button-group">
                    <button className="edit-button" onClick={() => handleEditNoticia(noticia._id)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      onClick={() => handleDeleteNoticia(noticia._id)}
                      className="delete-button"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          {isLoggedIn && <AgregarNoticiaForm onNoticiaAdded={handleNoticiaAdded} />}
        </div>
        <ScrollToTop smooth className="scrollToTopButton">
          <FontAwesomeIcon icon={faChevronUp} />
          Scroll To Top
        </ScrollToTop>
        <a href="https://wa.me/+56988249970" className="whatsapp-float" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
