import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Datos enviados:', formData);
    } else {
      console.log('Formulario contiene errores. No se pudo enviar.');
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
