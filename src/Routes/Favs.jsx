import React from "react"
import Card from "../Components/Card"

const Favs = ({themeClass}) => {

  const data = JSON.parse(localStorage.getItem("favorites"))

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {data.map((dentist) => {
          let {id, name, username } = dentist
          return (
            <Card
              key={id}
              name={name}
              username={username}
              id={id}
              theme={themeClass}
            />
          )
        })}
      </div>
    </>
  );
};

export default Favs;
