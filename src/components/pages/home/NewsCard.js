import React from 'react';
import '../../../css/pages/news/NewsCard.css'; // Стили для карточки

function NewsCard({ title, description, image, source, time }) {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-card-image" />
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-description">{description}</p>
        <div className="news-card-footer">
          <span className="news-card-source">{source}</span>
          <span className="news-card-time">{time}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
