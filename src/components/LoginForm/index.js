import React, { useState } from 'react';
import '../../css/pages/LoginForm/loginForm.css'; // Импортируем стили
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Возвращает на предыдущую страницу
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = 'Требуется электронная почта';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Электронный адрес недействителен';
    }

    if (!formData.password) {
      errors.password = 'Требуется пароль';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      console.log('Представленная форма:', formData);
      // Здесь можно добавить логику для отправки данных на сервер
    }
  };

  return (
    <div className='loginForm'>
      <button onClick={handleBackClick} className='buttonStyle'>
      Назад
        </button>
      <h2 className='title'>Вход в учетную запись</h2>
      {submitted ? (
        <p className='successMessage'>Вход в систему успешно выполнен!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='formGroup'>
            <label className='label'>Адрес электронной почты</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='input'
            />
            {errors.email && <p className='error'>{errors.email}</p>}
          </div>
          <div className='formGroup'>
            <label className='label'>Пароль</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className='input'
            />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          <button type="submit" className='submitButton'>Войти в систему</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;