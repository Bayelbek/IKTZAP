import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Header from "../../header";
import Footer from "../../footer";
import "../../../css/pages/categories/categoriesMain.scss";
import { fetchCategories } from "../../../api/category.ts";
import { Category } from "../../../models/category";

 
function Сategories() {
  const [items, setItems] = useState<Category[]>([]);
  const [getID, setGetID] = useState<number>();
  
  
  const clickID = (obj) => {
    setGetID(obj)
  }
  
  // const id = getID

  function id(){
    return getID
  }

  

  // const [openAddCategory, setOpenAddCategory] = useState(false);

  // const [formData, setFormData] = useState({
  //   // Инициализируем объект formData с полями, которые вы хотите отправить
  //   title: '',
  //   image_url: ''
  // });

  //   // Функция для обработки изменений в полях ввода
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  //  // Функция для отправки POST запроса
  //  const handleSubmit = (event) => {
  //   event.preventDefault(); // Предотвращаем стандартное поведение формы

  //   // Выполняем POST запрос с помощью Axios
  //   axios.post('https://api.iktzap.besoft.kg/v1/category', formData)
  //     .then(response => {
  //       console.log('Response:', response.data);
  //       // Делаем что-то с ответом, например, обновляем состояние компонента
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       // Обрабатываем ошибку, например, отображаем сообщение об ошибке
  //     });
  // };



  // const addCategory = () => setOpenAddCategory(true)
  // const closeAddCategory = () => setOpenAddCategory(false)

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
          <div className="title">
          <div className="text">Категории</div>
            {/* <button onClick={addCategory}>
              Добавить Категории
            </button> */}
          </div>

          <ul>
            <li>
              {items.map((g) => (
                <Link key={g.id} to={`/category/${g.id}`} onClick={()=> clickID(g.id)}>
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

        <div>
          {/* {openAddCategory && (
          <div className="addCategory">
          <div className="container">
            <div className="item">
              <div className="item_logo">
                  <img className="logo" src="img/logoIKT.png" alt="" />
                  <img onClick={closeAddCategory} className="close" src="img/close.svg" alt="" />
              </div>
              <div className="forms">
                <form action="" onSubmit={handleSubmit}>
                  <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Название Категории" />
                  <input type="file" name="image_url" value={formData.image_url} onChange={handleChange} placeholder="Выберите картинку " />
                  <button type="submit">Добавить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        )} */}
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Сategories;
