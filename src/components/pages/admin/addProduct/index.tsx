import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import HeaderCategory from '../headerCategory/index.js';
import { fetchCategories } from "../../../../api/category.ts";
import { Category } from "../../../../models/category.ts";


function AddProduct() {

    const { id } = useParams();
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [title, setTitle] = useState('');
    const [items, setItems] = useState<Category[]>([]);
    const [listParentId, setListParentId] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null); // Состояние для хранения выбранной категории
  
    const goBack = () => {
      window.history.back();
    };
  
    useEffect(() => {
      fetchCategories().then((res) => {
        setItems(res);
      });
      axios.get('https://api.ikt-zap.ru/v1/category/all').then((res) => {
        setListParentId(res.data.payload.list);
      });
    }, [id]);
  
    // useEffect(() => {
    //   const currentItem = items.find(item => item.id === id);
    //   if (currentItem) {
    //     setTitle(currentItem.title);
    //   }
    // }, [items, id]);
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
        setImageFile(file);
      }
    };
  
    const handleCategorySelect = (event) => {
      setSelectedCategoryId(event.target.value); // Устанавливаем выбранный id категории
    };
  
    const add = async () => {
      try {
        const formData = new FormData();
        const jsonData = JSON.stringify({
          parent_id: selectedCategoryId, // Используем выбранный id категории
          title: title,
          updated_at: null,
        });
        formData.append('_json', jsonData);
  
        if (imageFile) {
          formData.append('image_file', imageFile);
        }
  
        const token = process.env.REACT_APP_API_TOKEN;
        if (!token) {
          alert('Токен не найден!');
          return;
        }
  
        await axios.post(`https://api.ikt-zap.ru/v1/product`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          },
        });
  
        goBack();
      } catch (error) {
        console.error('Ошибка при добавлении:', error);
        alert('Произошла ошибка при добавлении');
      }
    };


  return (
    <div className="addProduct">
        <div className="update_item">
        <HeaderCategory
          title='Добавить тип товара'
          linkTitle="Назад"
          addLink="back"
        />

        <div className="update_main">
          <div className="update_left">
            <img
              src={image || undefined}
              alt=""
              style={{ marginTop: '0px' }}
            />
            <input
              type="file"
              accept="image/*"
              id="upload-input"
              onChange={handleImageUpload}
            />
          </div>
          <div className="update_right">
            <b>Категория</b>
            <select className='subCategorylist' onChange={handleCategorySelect} value={selectedCategoryId || ''}>
              <option value="" disabled>Выберите категорию</option>
              {items.map(item => (
                <option key={item.id} value={item.id}>{item.title}</option>
              ))}
            </select>

            <b>Название</b>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
        </div>
        <div className="update_button">
          <button onClick={add}>Создать</button>
        </div>
      </div>
    </div>
  )
}


export default AddProduct;