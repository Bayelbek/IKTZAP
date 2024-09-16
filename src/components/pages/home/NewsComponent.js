import React, { useState, useEffect } from 'react';
import "../../../css/pages/news/NewsComponent.css"


    const staticNews = [
        {
          title: "Новость 1",
          description: "Описание новости 1",
          urlToImage: "https://auto.24tv.ua/resources/photos/news/202406/5433001cc0450-2890-4763-9b82-f49410619178.jpg?w=400&h=225&fit=cover&output=webp&q=95",
          url: "https://10fastfingers.com/typing-test/russian"
        },
        {
          title: "Новость 2",
          description: "Описание новости 2",
          urlToImage: "https://auto.24tv.ua/resources/photos/news/582_DIR/202406/54329__26c85d63-7ea0-4f75-9410-f23e862a35ef.jpg?1718018202000",
          url: "https://10fastfingers.com/typing-test/russian"
        },
        {
            title: "Новость 1",
            description: "Описание новости 1",
            urlToImage: "https://auto.24tv.ua/resources/photos/news/202406/5433001cc0450-2890-4763-9b82-f49410619178.jpg?w=400&h=225&fit=cover&output=webp&q=95",
            url: "https://10fastfingers.com/typing-test/russian"
          },
          {
            title: "Новость 2",
            description: "Описание новости 2",
            urlToImage: "https://auto.24tv.ua/resources/photos/news/582_DIR/202406/54329__26c85d63-7ea0-4f75-9410-f23e862a35ef.jpg?1718018202000",
            url: "https://10fastfingers.com/typing-test/russian"
          },
          {
            title: "Новость 1",
            description: "Описание новости 1",
            urlToImage: "https://auto.24tv.ua/resources/photos/news/202406/5433001cc0450-2890-4763-9b82-f49410619178.jpg?w=400&h=225&fit=cover&output=webp&q=95",
            url: "https://10fastfingers.com/typing-test/russian"
          },
          {
            title: "Новость 2",
            description: "Описание новости 2",
            urlToImage: "https://auto.24tv.ua/resources/photos/news/582_DIR/202406/54329__26c85d63-7ea0-4f75-9410-f23e862a35ef.jpg?1718018202000",
            url: "https://10fastfingers.com/typing-test/russian"
          },
          {
              title: "Новость 1",
              description: "Описание новости 1",
              urlToImage: "https://auto.24tv.ua/resources/photos/news/202406/5433001cc0450-2890-4763-9b82-f49410619178.jpg?w=400&h=225&fit=cover&output=webp&q=95",
              url: "https://10fastfingers.com/typing-test/russian"
            },
            {
              title: "Новость 2",
              description: "Описание новости 2",
              urlToImage: "https://auto.24tv.ua/resources/photos/news/582_DIR/202406/54329__26c85d63-7ea0-4f75-9410-f23e862a35ef.jpg?1718018202000",
              url: "https://10fastfingers.com/typing-test/russian"
            },
      ];
      
      const NewsComponent = () => {
        const [news] = useState(staticNews);
      
        return (
          <div className="news-container">
            {news.map((item, index) => (
              <div key={index} className="news-item">
                <img src={item.urlToImage} alt={item.title} className="news-image" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a className='a' href={item.url} target="_blank" rel="noopener noreferrer">
                  Читать далее
                </a>
              </div>
            ))}
          </div>
        );
      };
    
      export default NewsComponent;
