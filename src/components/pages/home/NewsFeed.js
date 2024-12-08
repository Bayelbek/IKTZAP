import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../../../components/pages/home/NewsCard'; // Импорт компонента карточки

const newsList = [
  {
    title: 'Новость 1',
    description: 'Это транспортные средства, механизмы и устройства, которые созданы для выполнения определенного вида работ. Каждая отрасль сельского хозяйства, экономики и производства нуждается в специальном оборудовании. Большинство процессов без участия спецтехники не могут быть выполнены или выполняются неэффективно',
    image: "https://auto.24tv.ua/resources/photos/news/202406/5433001cc0450-2890-4763-9b82-f49410619178.jpg?w=400&h=225&fit=cover&output=webp&q=95",
    source: 'Источник 1',
    time: '2 дня назад'
  },
  {
    title: 'Новость 2',
    description: 'Это транспортные средства, механизмы и устройства, которые созданы для выполнения определенного вида работ. Каждая отрасль сельского хозяйства, экономики и производства нуждается в специальном оборудовании. Большинство процессов без участия спецтехники не могут быть выполнены или выполняются неэффективно',
    image: "https://auto.24tv.ua/resources/photos/news/582_DIR/202406/54329__26c85d63-7ea0-4f75-9410-f23e862a35ef.jpg?1718018202000",
    source: 'Источник 2',
    time: '17 часов назад'
  },
  {
    title: 'Новость 1',
    description: 'Это транспортные средства, механизмы и устройства, которые созданы для выполнения определенного вида работ. Каждая отрасль сельского хозяйства, экономики и производства нуждается в специальном оборудовании. Большинство процессов без участия спецтехники не могут быть выполнены или выполняются неэффективно',
    image: "https://auto.24tv.ua/resources/photos/news/202406/5433001cc0450-2890-4763-9b82-f49410619178.jpg?w=400&h=225&fit=cover&output=webp&q=95",
    source: 'Источник 1',
    time: '2 дня назад'
  },
  {
    title: 'Новость 2',
    description: 'Это транспортные средства, механизмы и устройства, которые созданы для выполнения определенного вида работ. Каждая отрасль сельского хозяйства, экономики и производства нуждается в специальном оборудовании. Большинство процессов без участия спецтехники не могут быть выполнены или выполняются неэффективно',
    image: "https://auto.24tv.ua/resources/photos/news/582_DIR/202406/54329__26c85d63-7ea0-4f75-9410-f23e862a35ef.jpg?1718018202000",
    source: 'Источник 2',
    time: '17 часов назад'
  }
  
];




function NewsFeed() {
  const [ listNews, setListNews ] = useState([])

  useEffect(() => {
    axios.get('https://api.ikt-zap.ru/v1/news').then((res) => {
      setListNews(res.data.payload.list)
    })
  }, []);


  return (
    <div className="news-feed">
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
  );
}

export default NewsFeed;
