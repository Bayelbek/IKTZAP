import React, { useState } from 'react';
import  '../../css/pages/RegistrationForm/registration.css';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
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
  
      if (!formData.username.trim()) {
        errors.username = 'Имя пользователя является обязательным';
      }
  
      if (!formData.email.trim()) {
        errors.email = 'Требуется электронная почта';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Электронный адрес недействителен';
      }
  
      if (!formData.password) {
        errors.password = 'Требуется пароль';
      } else if (formData.password.length < 6) {
        errors.password = 'Пароль должен содержать не менее 6 символов';
      }
  
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Пароль не совпадает';
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
      }
    };
  
    return (
      <div className='registrationForm'>
        <button onClick={handleBackClick} className='buttonStyle'>
        Назад
        </button>
        <h2 className='title'>Регистрация</h2>
        {submitted ? (
          <p className='successMessage'>Регистрация прошла успешно!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className='formGroup'>
              <label className='label'>Имя пользователя</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className='input'
              />
              {errors.username && <p className='error'>{errors.username}</p>}
            </div>
            <div className='formGroup'>
              <label className='label'>Электронная почта</label>
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
            <div className='formGroup'>
              <label className='label'>Подтвердите пароль</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className='input'
              />
              {errors.confirmPassword && (
                <p className='error'>{errors.confirmPassword}</p>
              )}
            </div>
            <button type="submit" className='submitButton'>Зарегистрироваться</button>
          </form>
        )}
      </div>
    );
  }
  
  export default Registration;