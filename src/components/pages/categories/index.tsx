import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../header";
import Footer from "../../footer";
import "../../../css/pages/categories/categoriesMain.scss";
import { fetchCategories } from "../../../api/category.ts";
import { Category } from "../../../models/category";

function Сategories() {
  const [items, setItems] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories().then((res) => {
      setItems(res);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="categories">
        <div className="container">
          <div className="text">Категории</div>
          <ul>
            <li>
              {items.map((g) => (
                <Link to={`/category/${g.id}`}>
                  <img src={g.image_url} alt="" />
                  <div className="title">
                    <p>{g.title}</p>
                    <img src={g.image_url} alt="" />
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
