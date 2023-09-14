import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  })

  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (formData.fullName.trim().length <= 5) {
      newErrors.error = 'Por favor verifique su información nuevamente'
    }

    if (!isValidEmail(formData.email)) {
      newErrors.error = 'Por favor verifique su información nuevamente'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      const { fullName } = formData
      setFormData({
        fullName: '',
        email: '',
      })
      setErrors({})
      setSuccessMessage(`Gracias ${fullName}, te contactaremos lo antes posible vía email.`)
      console.log('Datos enviados:', formData)
    } else {
      setSuccessMessage('')
      console.log('Formulario contiene errores. No se pudo enviar.')
    }
  }

  return (
    <div className="formContainer">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button className="h-btn" type="submit">
          Submit
        </button>
        {errors.error && <p className="error">{errors.error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </div>
  )
}

export default Form