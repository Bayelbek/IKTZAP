import React, { useState } from 'react';
import  '../../css/pages/RegistrationForm/registration.css';

function Registration() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
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
  
      if (!formData.username.trim()) {
        errors.username = 'Username is required';
      }
  
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid';
      }
  
      if (!formData.password) {
        errors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
  
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
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
      }
    };
  
    return (
      <div className='registrationForm'>
        <h2 className='title'>Sign Up</h2>
        {submitted ? (
          <p className='successMessage'>Registration successful!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className='formGroup'>
              <label className='label'>Username</label>
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
            <div className='formGroup'>
              <label className='label'>Confirm Password</label>
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
            <button type="submit" className='submitButton'>Register</button>
          </form>
        )}
      </div>
    );
  }
  
  export default Registration;