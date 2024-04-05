import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from '../../header';
import Footer from '../../footer';
import '../../../css/pages/categories/categoriesMain.scss';


function Сategories() {

  const [Category, setCategory] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://api.iktzap.besoft.kg/v1/category').then((res) => {
      setCategory(res.data.payload.list)
    }).catch(error => {
      console.error('Error Category :', error);
    });

  },[]);
  
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

                <ul>
                  <li><h1>This is List</h1></li>
                    {Category.map((obj) => {
                      <li>{obj.title}</li>
                    })}
                </ul>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Сategories;
