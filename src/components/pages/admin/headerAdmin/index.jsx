import {React, useState} from 'react';
import { Link } from 'react-router-dom';

import './headerAdmin.scss';

function HeaderAdmin() {
  const [showMenu, setShowMenu] = useState(false)

  function clickBurger(bol){
    return setShowMenu(bol)
  }

  return (
    <div className='header'>
      <div className="container">
        <div className="headerItem">
            <div className="logo">
                <img src="img/logo.png" alt="" />
                <p>ИКТ Запчасти</p>
            </div>
            <div className="search">
                <img src="img/search.svg" alt="" />
                <input type="text" name="" id="" placeholder='Поиск...' />
            </div>
            <div className="user"></div>
        </div>
      </div>
    </div>
  )
};

export default HeaderAdmin;

