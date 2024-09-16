import React from "react";
import { Link } from "react-router-dom";

import Header from "../../header";
import Footer from '../../footer'
import "../../../css/pages/home/homeMain.scss";
import Slider from "./Slider/Slider.tsx";

function home() {
  return (
    <>
      <Header />
      <div className="homeMain">
        <Slider/>
        <div className="home_categories">
          <img className="ekskovator" src="img/Cars/Эксковатор.jpg" alt="" />
          <img className="kran" src="img/Cars/50.jpg" alt="" />
          <div className="container">
            <div className="title">
              <p>Категории</p>
              <a className="next" href="">
              Посмотреть ...
            </a>
            </div>
            <ul>
              <li>
                <Link to="/toyota_lc_200">
                  <img
                    style={{ width: "280px" }}
                    src="img/Cars/toyota_lc_200.jpg"
                    alt=""
                  />
                  <div className="title">
                    <p>toyota lc 200</p>
                    <img src="img/right.svg" alt="" />
                  </div>
                </Link>
                <Link to="/vnedorojnik">
                  <img
                    style={{
                      width: "290px",
                      height: "180px",
                      marginBottom: "20px",
                    }}
                    src="img/Cars/toyota_lc_prado_150.png"
                    alt=""
                  />
                  <div className="title">
                    <p>Toyota lc prado 150</p>
                    <img src="img/right.svg" alt="" />
                  </div>
                </Link>
                <a href="/">
                  <img src="img/Cars/vnedorojnik.png" alt="" />
                  <div className="title">
                    <p>Toyota hilux </p>
                    <img src="img/right.svg" alt="" />
                  </div>
                </a>
              </li>
              <li>
                <Link to="/toyota_lc_200">
                  <img
                    style={{ width: "280px" }}
                    src="img/Cars/toyota_lc_200.jpg"
                    alt=""
                  />
                  <div className="title">
                    <p>toyota lc 200</p>
                    <img src="img/right.svg" alt="" />
                  </div>
                </Link>
                <Link to="/vnedorojnik">
                  <img
                    style={{
                      width: "290px",
                      height: "180px",
                      marginBottom: "20px",
                    }}
                    src="img/Cars/toyota_lc_prado_150.png"
                    alt=""
                  />
                  <div className="title">
                    <p>Toyota lc prado 150</p>
                    <img src="img/right.svg" alt="" />
                  </div>
                </Link>
                <a href="/">
                  <img src="img/Cars/vnedorojnik.png" alt="" />
                  <div className="title">
                    <p>Toyota hilux </p>
                    <img src="img/right.svg" alt="" />
                  </div>
                </a>
              </li>
            </ul>
           
          </div>
        </div> 
        <div className="home_news">
                <h2>Новости</h2>
                <div className="item">
                    <div className="container">
                        <div className="item_main">
                            <p className="title">Lorem ipsum</p>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit, 
                                    nunc posuere mollis nullam sagittis dignissim aliquam m
                                    auris, himenaeos ridiculus momentnt class nisl Phasellus.
                                    Himenaeos tortor magnis commodo magna dignissim nost
                                    ra praesent justo, quis curabitur vitae porttitor cubilia luct
                                    us lectus обитатель рожениц, consectetur scelerisque duis ex blandittellus iaculis. Sed ipsum est at potti magnis velit libero lectus per faucibus, ultrices vitae suscipit volutpat augue tincidunt id cras quisque porttitor</p>
                        </div>
                    </div>
                </div>
        </div> 
        <div className="home_forms">
            <div className="container">
                <div className="forms_item">
                    <div className="title">
                        <img src="img/icons/sms.png" alt="" />
                        <div>
                            <b>У вас появились вопросы?</b>
                            <p>Напишите нам и специалисты компании ответят вам в кратчайшие сроки.</p>
                        </div>
                    </div>
                    <form action="">
                        <div className="region">
                            <input type="text" placeholder="Регион" />
                            <input type="text" placeholder="+7 (999) 888 77-66" />
                        </div>
                        <div className="name">
                            <input type="text" placeholder="Адрес эл.почты" />
                            <input type="text" placeholder="Имя" />
                        </div>
                        <textarea type="text" placeholder="Сообщение"></textarea><br/>
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
        </div> 
      </div>
    </>
  );
}

export default home;
