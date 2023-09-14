import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'

const Detail = ({ theme }) => {
  const { id } = useParams()
  const [dentist, setDentist] = useState(null)

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
        <Card
        key={dentist.id}
        id={dentist.id}
        name={dentist.name}
        username={dentist.phone}
        website={dentist.website}
        email={dentist.email}
        theme={theme}
      />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail
