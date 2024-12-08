import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HeaderCategory from '../headerCategory/index.js';
import NewsCard from '../../home/NewsCard.js';

function News() {
    const [ listNews, setListNews ] = useState([])

    useEffect(() => {
        axios.get('https://api.ikt-zap.ru/v1/news').then((res) => {
          setListNews(res.data.payload.list)
        })
      }, []);
    
  return (
    <div className="news">
        <HeaderCategory
          title='Новости'
          linkTitle="Добавить"
          addLink="Add_News"
        />

        <div className="listNews" style={{marginTop:"40px"}}>
            {listNews.map((news, index) => (
                <NewsCard
                    key={index}
                    title={news.title}
                    description={news.description}
                    image={news.image_path}
                    source={news.source}
                    time={news.updated_at}
                />
            ))}
        </div>

    </div>
  )
}


export default News;