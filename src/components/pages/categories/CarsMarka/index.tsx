import React from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../../../header";
import "../../../../css/pages/categories/CarsMarka/CarsMarka.scss";
import { fetchCategories } from "../../../../api/category.ts";
import { Category } from "../../../../models/category";
import CarsMarkaJson from '../../../../json/carsMarka.json'

function CarsMarka() {
  const { id } = useParams();
  const [items, setItems] = React.useState<Category[]>([]);


  // React.useEffect(() => {
  //   fetchCategories(+(id||0)).then((res) => {
  //     setItems(res);
  //   });
  // }, []);

  return (
    <div>
      <Header />
      <div className="CarsMarka"> 
        <div className="container">
          <div className="title">
            <div className="text">
              <Link to="/categories">Категории22 </Link>/ {items.map((obj)=> (id == obj.id ? obj.title : ''))}
            </div>
          </div>
          <div className="item">
            <ul>
              <li>
                  {CarsMarkaJson.map((g)=>(<Link to="/zapchasti">
                      <img src={`img/Cars/${g.images}`} alt="" />
                      <div className="title">
                        <p>{g.title}</p>
                        <img src="/img/right.svg" alt="" />
                      </div>
                    </Link>))}


                {/* {items.map(g=>(<Link to="/toyota_lc_200">
                  <img
                    style={{ width: "280px" }}
                    src="img/Cars/toyota_lc_200.jpg"
                    alt=""
                  />
                  <div className="title">
                    <p>{g.title}</p>
                    <img src="img/right.svg" alt="" />
                  </div>
                </Link>))} */}

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsMarka;
