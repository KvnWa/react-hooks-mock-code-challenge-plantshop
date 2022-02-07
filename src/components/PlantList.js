import React from "react";
import PlantCard from "./PlantCard";

function PlantList({setPlantData, plantData }) {

const plantList = plantData.map((plant) => { 
  return <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price} id={plant.id} />})

  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;
