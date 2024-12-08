import React from 'react'

import '../../css/pages/footer/footer.scss'

function footer() {
  return (
    <>
    <div className="home_footer">
                <div className="container">
                    <div className="item">
                        <ul>
                            <li className="logo">
                              <div className="logo_item">
                                <img src="img/logo.png" alt="" />
                                <p>ИКТ Запчасти</p>
                              </div>
                              <p>© 2024 Все права защищены.</p>
                            </li>
                            <li className="footer_categories">
                              <p>Категории</p>
                              <a href="">Внедорожник</a>
                              <a href="">Погрузчик</a>
                              <a href="">Эксковатор</a>
                              <a href="">Самосвал</a>
                              <a href="">Манипулятор</a>
                              <a href="">Каток</a>
                              <a href="">Автокран</a>
                              <a href="">Автовышка</a>
                              <a href="">Автобус</a>
                              <a href="">Телеск.Погрузчик</a>
                              <a href="">Автогрузовой</a>
                              <a href="">Водовоз</a>
                            </li>
                            <li className="footer_about">
                              <p>О комании</p>
                              <a href="">Контакты</a>
                              <a href="">О нас</a>
                            </li>
                            <li className="footer_socialMedia">
                              <p>Следите за нами в соц. сетях</p>
                              <div className="item">
                                <a href=""><img src="img/icons/instagram.png" alt="" /></a>
                                <a href=""><img src="img/icons/telegram.png" alt="" /></a>
                                <a href=""><img src="img/icons/whatsapp.png" alt="" /></a>
                                <a href=""><img src="img/icons/facebook.png" alt="" /></a>
                                <a href=""><img src="img/icons/youtube.png" alt="" /></a>
                              </div>
                            </li>
                        </ul>
                    </div>
                </div>    
        </div>
        </>
  )
}

export default footer;
