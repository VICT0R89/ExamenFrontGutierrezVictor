import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({ theme }) => {
  const { id } = useParams()
  const [dentist, setDentist] = useState(null)

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setDentist(data)
      })
      .catch((error) => {
        console.error('Error fetching dentist details:', error)
      })
  }, [id])

  return (
    <div className={`detail ${theme}`}>
      <h1>Dentist Details</h1>
      {dentist ? (
        <div className="dentist-details">
          <h2>{dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail
