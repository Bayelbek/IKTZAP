import React, { useState } from 'react';
import '../../css/pages/LoginForm/loginForm.css'; // Импортируем стили

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
      // Здесь можно добавить логику для отправки данных на сервер
    }
  };

  return (
    <div className='loginForm'>
      <h2 className='title'>Login</h2>
      {submitted ? (
        <p className='successMessage'>Login successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='formGroup'>
            <label className='label'>Email</label>
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
            <label className='label'>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className='input'
            />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          <button type="submit" className='submitButton'>Login</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;