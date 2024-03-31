import React from 'react';

import Header from '../../header';
import Slider from "./slider"
import '../../../css/pages/home/homeMain.scss'

function Home() {
    // const [cars, setCars] = React.useState([]);

    // React.useEffect(()=>{
    //   fetch('https://66084611a2a5dd477b14432d.mockapi.io/api/iktzap/CARS')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setCars(cars)
    //   });
    // }, []);


  return (
    <>
    <Header/>
    <div className="homeMain">
        <div className="container">
            <div className="item">
                <div className="slider">
                    <Slider/>
                <div className="button">
                    <img className='left' src="img/right.svg" alt="" />
                    <img className='right' src="img/right.svg" alt="" />
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}


export default Home;
