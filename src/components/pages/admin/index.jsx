import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import HeaderAdmin from './headerAdmin';

import './admin.scss';

function Admin() {
  const location = useLocation(); // Получаем текущий путь

  // Проверяем, активен ли путь для каждой ссылки
  const isActive = (path) => location.pathname === path;



  return (
    <>
        <header className="header_admin">
            <HeaderAdmin/>
            <div className="container">
              <div className="main_admin">
                <div className="block_one">
                <ul>
                <Link className={isActive('/adminPanel') ? 'active' : ''}  to="/adminPanel" ><li  >Пользователи</li></Link>
                  <Link className={isActive('/adminPanel/category') ? 'active' : ''} to="/adminPanel/category"><li>Категории</li></Link>
                  <Link className={isActive('/adminPanel/subCategory') ? 'active' : ''} to="/adminPanel/subCategory"><li>Подкатегории</li></Link>
                  <Link className={isActive('/adminPanel/product') ? 'active' : ''} to="/adminPanel/product"><li>Товары</li></Link>
                  <Link className={isActive('/adminPanel/notify') ? 'active' : ''} to="/adminPanel/notify"><li>Уведомление</li></Link>
                  <Link className={isActive('/adminPanel/orders') ? 'active' : ''} to="/adminPanel/orders"><li>Заказы</li></Link>
                  <Link className={isActive('/adminPanel/news') ? 'active' : ''} to="/adminPanel/news"><li>Новости</li></Link>
                  <Link className={isActive('/adminPanel/slide') ? 'active' : ''} to="/adminPanel/slide"><li>Слайд</li></Link>
                </ul>
              </div>
              <div className="block_two">
                <Outlet />
              </div>
              </div>
            </div>
        </header>
    </>
  )
}


export default Admin;

