import {React, useState} from 'react';
import { Link } from 'react-router-dom';

import './headerAdmin.scss';

function HeaderAdmin() {
  const [showMenu, setShowMenu] = useState(false)

  function clickBurger(bol){
    return setShowMenu(bol)
  }

  return (
    <div className='headerAdmin'>
      <div className="container">
        <div className="headerItem">
            <div className="logo">
                <img src="/img/logo.png" alt="" />
            </div>
            <div className="search">
                <img src="/img/search.svg" alt="" />
                <input type="text" name="" id="" placeholder='Поиск...' />
            </div>
            <div className="user">
              <p className="name">Admin</p>
              <img src="/img/substrelka.ico" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
};

export default HeaderAdmin;

