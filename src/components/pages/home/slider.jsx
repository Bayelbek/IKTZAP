import React from 'react'

export default function Slider({name, img, link, spisok}) {
  return (
    <>
        <div className="text">
                        <h1 className="title">
                            SANY SY500H <b>или аналог</b>
                        </h1>
                        <ul>
                            <li><img src="img/done.png" alt="" />Эксплуатационная масса: 50т</li>
                            <li><img src="img/done.png" alt="" />Длинна стрелы : 7м</li>
                            <li><img src="img/done.png" alt="" />Длинна стрелы : 3м</li>
                            <li><img src="img/done.png" alt="" />Длинна стрелы : 7м</li>
                            <li><img src="img/done.png" alt="" />Объем ковша : 2,5 м3</li>
                        </ul>
                        <button>Подробнее...</button>
                    </div>
                    <img className='ekskovator' src="img/Cars/Эксковатор.jpg" alt="" />
      
    </>
  )
}
