import React, {useState} from "react";

function PlantCard({plant}) {
  const [isStocked, setIsStocked] = useState(true)

  function handleClick(){
    setIsStocked((isStocked) => !isStocked)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isStocked ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
