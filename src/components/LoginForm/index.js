import React, { useState } from 'react';
import '../../css/pages/LoginForm/loginForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
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

    if (!formData.login.trim()) {
      errors.login = 'Требуется логин';
    }

    if (!formData.password) {
      errors.password = 'Требуется пароль';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          'https://api.ikt-zap.ru/v1/auth',
          {
            login: formData.login,
            password: formData.password,
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 200) {
          setSubmitted(true);
          navigate('/adminPanel');  
        }
      } catch (error) {
        setErrors({ api: 'Неправильный логин или пароль' });
      }
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
            <label className='label'>Логин или E-mail</label>
            <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleChange}
              className={`input ${errors.api ? 'errorInput' : ''}`}
            />
            {errors.login && <p className='error'>{errors.login}</p>}
          </div>
          <div className='formGroup'>
            <label className='label'>Пароль</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`input ${errors.api ? 'errorInput' : ''}`}
            />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          {errors.api && <p className='error'>{errors.api}</p>}
          <button type="submit" className='submitButton'>Войти в систему</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
