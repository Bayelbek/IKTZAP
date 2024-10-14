import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../../header";
import Footer from "../../footer";
import "../../../css/pages/categories/categoriesMain.scss";
import { fetchCategories } from "../../../api/category.ts";
import { Category } from "../../../models/category";
import axios from "axios";




function Сategories() {
  const {id} = useParams()
  const [items, setItems] = useState<Category[]>([]);
  
  useEffect(() => {
    fetchCategories(id ? +id : undefined).then((res) => {
      setItems(res);
    });
    
  }, [id]);

  console.log(items)

  return (
    <>
      <Header />
      <div className="categories">
        <div className="container">
          <div className="title">
          <div className="text">Категории</div>
          </div>
          <ul>
            <li>
              {items.map((g) => (
                <Link key={g.id} to={`/category/${g.id}${id ? '/product' : ''}`} >
                  <img src={g.image_url} alt="" />
                  <div className="title">
                    <p>{g.title}</p>
                    <img src="/img/right.svg" alt="" />
                  </div>
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Сategories;
