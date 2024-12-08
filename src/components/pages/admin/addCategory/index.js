import React, {useState} from 'react';

import axios from 'axios';

import HeaderCategory from '../headerCategory/index.js';


function AddCategory() {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Добавляем состояние для файла
  const [title, setTitle] = useState('');

  const goBack = () => {
    window.history.back();
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value); // Обновляем состояние при изменении инпута
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Отображаем загруженное изображение
      setImageFile(file); // Сохраняем файл для отправки на сервер
    }
  };


  const add = async () => {
    try {
      const formData = new FormData();
      // Добавляем JSON данные как строку в ключ `_json`
      const jsonData = JSON.stringify({
        parent_id: null, // Или другое значение, если требуется
        title: title,
        updated_at: null, // Или укажите время обновления, если необходимо
      });
      formData.append('_json', jsonData);

      // Добавляем изображение, если оно загружено
      if (imageFile) {
        formData.append('image_file', imageFile);
      }

      // Получаем токен из .env
      const token = process.env.REACT_APP_API_TOKEN;
      // Проверяем токен
      if (!token) {
        alert('Токен не найден!');
        return;
      }
  
       // Отправляем запрос на сервер
       await axios.post(`https://api.ikt-zap.ru/v1/category`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
      
  
      goBack()
    } catch (error) {
      console.error('Ошибка при добавление:', error);
      alert('Произошла ошибка при добавление');
    }
  };

  return (
    <div className="add">
        <div className="update_item">
        <HeaderCategory
          title='Добавить Категории'
          linkTitle="Назад"
          addLink="back"
        />

        <div className="update_main">
          <div className="update_left">
            <img
              src={image ? image : ''}
              alt=""
              style={{marginTop:'0px'}}
            />
            <input
              type="file"
              accept="image/*"
              id="upload-input"
              onChange={handleImageUpload}
            />
          </div>
          <div className="update_right">
            <b>Название</b>
            <input
              type="text"
              value={title} // Используем value для отображения текущего значения
              onChange={handleTitleChange} // Обрабатываем изменения инпута
            />
          </div>
        </div>
        <div className="update_button">
          <button onClick={add}>Создать</button> {/* Кнопка сохраняет изменения */}
        </div>
      </div>
    </div>
  )
}

export default AddCategory;
