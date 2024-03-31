import React from 'react';

import Header from '../../header';
import '../../../css/pages/home/homeMain.scss'

function home() {
  return (
    <>
    <Header/>
    <div className="homeMain">
        <div className="container">
            <div className="item">
                <div className="slider">
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
                <div className="button">
                    <img className='left' src="img/right.svg" alt="" />
                    <img className='right' src="img/right.svg" alt="" />
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}


export default home;
