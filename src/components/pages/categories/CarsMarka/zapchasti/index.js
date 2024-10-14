import React from 'react';
import { Link } from 'react-router-dom';


import Headers from '../../../../header'
import '../../../../../css/pages/categories/CarsMarka/zapchasti/toyotaLc200.scss'

function ToyotaLc200() {
  return (
    <>
        <Headers/>
        <div className="toyotaLc200">
            <div className="container">
                <div className="title">
                    <div className='text'><Link to='/categories'>Категории </Link>/ <Link to='/category/1'>Внедорожник</Link> / Toyota LC 200 </div>
                </div>
                <ul>
                <li>
                    <Link to="/toyota_lc_200_electric">
                        <img src="img/icons/Электричество.png" alt="" />
                        <div className="title">
                            <p>Электричество</p>
                            <img src="img/right.svg" alt="" />
                        </div>
                    </Link>
                    <Link to="/CarsMarka">
                        <img  src="img/icons/Мотор.png" alt="" />
                        <div className="title">
                            <p>Мотор</p>
                            <img src="img/right.svg" alt="" />
                        </div>
                    </Link>
                    <a href="/">
                        <img src="img/icons/Ходовой.png" alt="" />
                        <div className="title">
                            <p>Ходовые части</p>
                            <img src="img/right.svg" alt="" />
                        </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                            <img src="img/icons/Шины.png" alt="" />
                            <div className="title">
                                <p>Шины</p>
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

export default ToyotaLc200;
