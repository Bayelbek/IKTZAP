import React from 'react'

import '../../../css/main/homeMain.scss'

function main() {
  return (
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
                    <img src="img/Cars/Эксковатор.jpg" alt="" />
                </div>
                <div className="button"></div>
            </div>
        </div>
    </div>
  )
}


export default main;
