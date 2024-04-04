import React from 'react'
import { Link } from 'react-router-dom';

import Header from '../../header'
import '../../../css/pages/categories/categoriesMain.scss'

function categories() {
  return (
    <>
        <Header/>
        <div className='categories'>
          <div className='container'>
                <div className='text'>Категории</div>
                <ul>
                  <li>
                    <Link to="/vnedorojnik">
                    <img src="img/Cars/vnedorojnik.png" alt="" />
                    <div className="title">
                      <p>Внедорожник</p>
                      <img src="img/right.svg" alt="" />
                    </div>
                    </Link>
                    <a href="/">
                    <img src="img/Cars/vnedorojnik.png" alt="" />
                    <div className="title">
                      <p>Внедорожник</p>
                      <img src="img/right.svg" alt="" />
                    </div>
                    </a>
                    <a href="/">
                    <img src="img/Cars/vnedorojnik.png" alt="" />
                    <div className="title">
                      <p>Внедорожник</p>
                      <img src="img/right.svg" alt="" />
                    </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <img src="img/Cars/vnedorojnik.png" alt="" />
                    <div className="title">
                      <p>Внедорожник</p>
                      <img src="img/right.svg" alt="" />
                    </div>
                    </a>
                    <a href="/">
                    <img src="img/Cars/vnedorojnik.png" alt="" />
                    <div className="title">
                      <p>Внедорожник</p>
                      <img src="img/right.svg" alt="" />
                    </div>
                    </a>
                    <a href="/">
                    <img src="img/Cars/vnedorojnik.png" alt="" />
                    <div className="title">
                      <p>Внедорожник</p>
                      <img src="img/right.svg" alt="" />
                    </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <img src="img/Cars/vnedorojnik.png" alt="" />
                    <div className="title">
                      <p>Внедорожник</p>
                      <img src="img/right.svg" alt="" />
                    </div>
                    </a>
                    <a href="/">
                    <img src="img/Cars/vnedorojnik.png" alt="" />
                    <div className="title">
                      <p>Внедорожник</p>
                      <img src="img/right.svg" alt="" />
                    </div>
                    </a>
                    <a href="/">
                    <img src="img/Cars/vnedorojnik.png" alt="" />
                    <div className="title">
                      <p>Внедорожник</p>
                      <img src="img/right.svg" alt="" />
                    </div>
                    </a>
                  </li>
                </ul>
          </div>
        </div>
    </>
  )
}

export default categories;
