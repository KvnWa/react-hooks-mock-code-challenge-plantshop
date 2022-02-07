import React, { useState} from "react";

function PlantCard({name, image, price, id}) {

  const [ stock, setStock ] = useState(true)

  function handleClick() {
    setStock(stock => !stock)
  }



  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
        <button className={stock ? "primary" : ""} onClick={handleClick}>{stock ? "In stock" : "Out of Stock"}</button>
    </li>
  );
}

export default PlantCard;
