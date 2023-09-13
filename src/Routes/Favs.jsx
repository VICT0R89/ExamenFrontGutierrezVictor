import React from "react"
import Card from "../Components/Card"

const Favs = ({themeClass}) => {

  const data = JSON.parse(localStorage.getItem("favorites"))

  return (
    <div className={themeClass}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {data.map((dentist) => {
          let {name, username, id, theme, email, website } = dentist
          return (
            <Card
              key={id}
              name={name}
              email={email}
              website={website}
              username={username}
              id={id}
              theme={theme}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Favs;
