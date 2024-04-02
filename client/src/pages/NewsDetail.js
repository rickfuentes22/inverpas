import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/NewsDetails.css";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [previousNews, setPreviousNews] = useState([]);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await axios.get(`/api/noticias/${id}`);
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news detail:", error);
      }
    };

    fetchNewsDetail();
  }, [id]);

  useEffect(() => {
    const fetchPreviousNews = async () => {
      try {
        const response = await axios.get("/api/noticias");
        setPreviousNews(response.data.filter(item => item._id !== id)); // Filtrar la noticia actual
      } catch (error) {
        console.error("Error fetching previous news:", error);
      }
    };

    fetchPreviousNews();
  }, [id]);

  if (!news) {
    return <div className="loading-message">Cargando...</div>;
  }

  return (
    <div style={{ marginTop: "66px" }}>
      <Navbar />
      <div className="news-detail-page">
        <div className="news-detail-container">
          <div className="news-content">
            <h2 className="news-title">{news.title}</h2>
            {news.imagenNoticia && <img src={`/uploads/${news.imagenNoticia}`} alt="Noticia Imagen" className="main-news-image" />}
            <div dangerouslySetInnerHTML={{ __html: news.content }} /> {/* Renderizar contenido HTML */}
          </div>
          <div className="previous-news-container">
            <h3>Otras Noticias</h3>
            {previousNews.map(previous => (
              <div key={previous._id} className="previous-news-card">
                {previous.imagenNoticia && <img src={`/uploads/${previous.imagenNoticia}`} alt="Noticia Imagen" className="previous-news-image" />}
                <div>
                  <h4>{previous.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetail;
