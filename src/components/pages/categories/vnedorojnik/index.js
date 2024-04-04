import React from 'react';
import { Link } from 'react-router-dom';


import Header from '../../../header'
import '../../../../css/pages/categories/vnedorojnik/vnedorojnik.scss'

function Vnedorojnik() {
  return (
    <div>
      <Header/>
      <div className="vnedorojnik">
        <div className="container">
            <div className="title">
                <div className='text'><Link to='/categories'>Категории </Link>/ Внедорожник</div>
            </div>
            <div className="item">
                <ul>
                <li>
                    <Link to="/toyota_lc_200">
                    <img style={{width:'280px',}} src="img/Cars/toyota_lc_200.jpg" alt="" />
                    <div className="title">
                      <p>toyota lc 200</p>
                      <img src="img/right.svg" alt="" />
                    </div>
                    </Link>
                    <Link to="/vnedorojnik">
                    <img style={{width:"290px", height:"180px", marginBottom:'20px'}} src="img/Cars/toyota_lc_prado_150.png" alt="" />
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
      </div>
    </div>
  )
}

export default Vnedorojnik;
