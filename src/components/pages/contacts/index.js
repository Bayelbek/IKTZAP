import React from 'react';

import Header from '../../header';
import Footer from '../../footer'
import '../../../css/pages/Contacts/contacts.scss';

function Contacts() {
  return (
    <>
      <Header/>
      <div className="Contacts">
        <div className="container">
          <div className="item">
            <div className="h1">Контакты</div>
            <h3>672015, Забайкальский край, г. Чита, ул. Дивизионная, д.3, п. Песчанка</h3>
          </div>
        </div>
          <div style={{position:"relative", overflow:"hidden"}}><a href="https://yandex.ru/maps/org/ist_kontekh/114239505424/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"}}>Ист Контех</a><a href="https://yandex.ru/maps/68/chita/category/industrial_construction/184107619/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"}}>Промышленное строительство в Чите</a><iframe src="https://yandex.ru/map-widget/v1/?ll=113.592426%2C51.993449&mode=poi&poi%5Bpoint%5D=113.592426%2C51.993448&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D114239505424&z=17.15" width="100%" height="690" frameborder="1" allowfullscreen="true" style={{position:"relative"}}></iframe></div>
      </div>
      <Footer/>
    </>
  )
}

export default Contacts;
