import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantData, setPlantData] = useState([])
  const [search, setSearch] = useState('')


  const filterSearch = plantData.filter(planty => planty.name.toLowerCase().includes(search.toLowerCase()))

  function addPlant(newPlant) {
    setPlantData([...plantData, newPlant])
  }


  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlantData(data))
  }, [])
  
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} setSearch={setSearch} />
      <PlantList plantData={filterSearch} />
    </main>
  );
}

export default PlantPage;
