import React from 'react'
import Form from '../Components/Form'

const Contact = ({ theme }) => {
  return (
    <div className={`contact ${theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}

export default Contact
