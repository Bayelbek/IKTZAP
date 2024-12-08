import React, { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";

import HeaderCategory from '../headerCategory/index.js';
import { fetchCategories } from "../../../../api/category.ts";
import { Category } from "../../../../models/category.ts";
import axios from 'axios';

function Update() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Добавляем состояние для файла
  const [listParentId, setListParentId] = useState([]);
  const [title, setTitle] = useState('');
  const [items, setItems] = useState<Category[]>([]);
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
  useEffect(() => {
    const currentItem = listParentId.find((el) => el.id == id);
    if (currentItem) {
      setTitle(currentItem.title); // Устанавливаем начальное значение для title
    }
  }, [items, id]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Отображаем загруженное изображение
      setImageFile(file); // Сохраняем файл для отправки на сервер
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value); // Обновляем состояние при изменении инпута
  };

  const handleCategorySelect = (event) => {
    setSelectedCategoryId(event.target.value); // Устанавливаем выбранный id категории
  };

  
  const handleSave = async () => {
    try {
      const currentItem = listParentId.find((el) => el.id == id); // Определяем текущую категорию
      const formData = new FormData();
  
      const jsonData = JSON.stringify({
        id: id,
        parent_id: selectedCategoryId || currentItem?.parent_id || null, // Используем выбранную категорию или parent_id текущего элемента
        title: title,
        updated_at: null, // Укажите время обновления, если нужно
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
  
      await axios.post(`https://api.ikt-zap.ru/v1/category`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      goBack();
    } catch (error) {
      console.error('Ошибка при сохранении:', error);
      alert('Произошла ошибка при сохранении изменений');
    }
  };
  

  const handleDelete = async () => {
    // Открываем окно подтверждения
    const confirmDelete = window.confirm("Вы действительно хотите удалить эту категорию?");
    
    if (!confirmDelete) {
      return; // Если пользователь нажал "Отмена", прерываем выполнение
    }
    
    try {
      // Получаем токен из .env
      const token = process.env.REACT_APP_API_TOKEN;
      if (!token) {
        alert('Токен не найден!');
        return;
      }
  
      // Отправляем DELETE запрос на сервер с `id` в параметрах
      await axios.delete(`https://api.ikt-zap.ru/v1/category`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        params: {
          id: id, // `id` из useParams, текущей категории
        },
      });
  
      goBack()
    } catch (error) {
      console.error('Ошибка при удалении:', error);
      alert('Произошла ошибка при удалении категории');
    }
  };
  
  const list = [listParentId.filter(el => el.parent_id == id)];
  const currentItem = listParentId.find((el) => el.id == id);
  const categoryId = items.filter(el => el.id == currentItem?.parent_id)

  // console.log('this is title : ' , title)
  // console.log('this is current title : ' , currentItem.title)
  return (
    <div className="update">
      <div className="update_item">

        <HeaderCategory
          title={currentItem ? currentItem.title : ''}
          linkTitle="Назад"
          addLink="back"
        />

        <div className="update_main">
          <div className="update_left">
            <img
              src={image ? image : (currentItem ? `https://api.ikt-zap.ru/storage/images/${currentItem?.image_path}` : '')}
              alt=""
            />
            <input
              type="file"
              accept="image/*"
              id="upload-input"
              onChange={handleImageUpload}
            />
          </div>
          <div className="update_right">
            <div className="categoryList" style={{display: currentItem?.parent_id  ? 'block' : 'none'}}>
                <b>Категория</b><br/>
                <select className='subCategorylist' onChange={handleCategorySelect} value={selectedCategoryId || ''}>
                  <option value="" disabled>{categoryId.length > 0 && categoryId[0] ? categoryId[0].title : ''}</option>
                  {items.map(item => (
                    <option key={item.id} value={item.id}>{item.title}</option>
                  ))}
                </select> 
            </div>

            <b>Название</b>
            <input
              type="text"
              value={title} // Используем value для отображения текущего значения
              onChange={handleTitleChange} // Обрабатываем изменения инпута
            />
              <div style={{display: currentItem?.parent_id == null ? 'block' : 'none'}}>
                  <b>Количество</b>
                    <h2>{list[0].length}</h2>
                    <a href="">посмотреть </a>
              </div>
          </div>
        </div>
        <div className="update_button">
          <button onClick={handleSave}>Сохранить</button> {/* Кнопка сохраняет изменения */}
          <button onClick={handleDelete} className='delete'>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default Update;
