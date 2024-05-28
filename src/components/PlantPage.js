import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([]);
  const[filteredPlants, setFilteredPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((plants) => {
      setPlantList(plants)
      setFilteredPlants(plants)
    })
  }, [])

  return (
    <main>
      <NewPlantForm setPlantList={setPlantList}/>
      <Search plantList={plantList} setFilteredPlants={setFilteredPlants}/>
      <PlantList plantList={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
