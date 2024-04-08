import React from 'react'
import { Link } from 'react-router-dom';


import Header from '../../../../../header'
import '../../../../../../css/pages/categories/vnedorojnik/toyota_lc_200/Электричество/electric.scss'

function Electric() {
    const [openInfo, setOpenInfo] = React.useState(false);

    const openInfoClick = () => setOpenInfo(true);
    const closeInfoClick = () => setOpenInfo(false);

  return (
    <>
    <Header/>
    <div className="toyota_Lc200_Electric">
        <div className="container">
            <div className="title">
                <div className='text'><Link to='/categories'>Категории </Link>/ <Link to='/category/1'>Внедорожник</Link> / Toyota LC 200 </div>
            </div>
            <div className="text">Электричество</div>
            <ul>
                <li>
                    <p className='name'>А12-21-3 12V (P21W 12V 21 WBA15s)повор.лампа</p>
                    <p>|</p>
                    <p className='number'>27</p>
                    <p>|</p>
                    <p className='shtuk'>шт</p>
                    <button onClick={openInfoClick}>Подробнее...</button>
                </li>
                <li>
                    <p className='name'>Name</p>
                    <p>|</p>
                    <p className='number'>1</p> 
                    <p>|</p>
                    <p className='shtuk'>шт</p>
                    <button onClick={openInfoClick}>Подробнее...</button>
                </li>
            </ul>
        </div>
        {openInfo && (
            <div className="info">
            <div className="container">
                <div className="item">
                    <div className="header">
                        <div className="logo">
                            <img className='img' src="img/logo.png" alt="" />
                            <p>Икт Запчасти</p>
                        </div>
                        <img onClick={closeInfoClick} className='close' src="img/close.svg" alt="" />
                    </div>
                    <ul>
                        <li>
                            <p className='nomer'>Тип</p>
                            <b>|</b>
                            <p className='nameVs'>Внедорожник</p>
                        </li>
                        <li>
                            <p className='nomer' style={{fontSize:'18px'}}>Марка Модель</p>
                            <b>|</b>
                            <p className='nameVs'>TOYOTA LC 200</p>
                        </li>
                        <li>
                            <p className='nomer'>Тип Запчасти</p>
                            <b>|</b>
                            <p className='nameVs'>Электричество</p>
                        </li>
                        <li>
                            <p className='nomer'>Номенклатура </p>
                            <b>|</b>
                            <p className='nameVs'>А12-21-3 12V (P21W 12V 21 WBA15s)повор.лампа</p>
                        </li>
                        <li>
                            <p className='nomer'>Код</p>
                            <b>|</b>
                            <p className='nameVs'>ОБ-00029112</p>
                        </li>
                        <li>
                            <p className='nomer'>Количество </p>
                            <b>|</b>
                            <p className='nameVs'>27</p>
                        </li>
                        <li>
                            <p className='nomer'>Единица </p>
                            <b>|</b>
                            <p className='nameVs'>шт</p>
                        </li>
                        <li>
                            <p className='nomer'>Артикуль </p>
                            <b>|</b>
                            <p className='nameVs'>А12-21-3</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )}
    </div>
    </>
  )
}

export default Electric;
