import React, {useState} from "react";

function Search({plantList, setFilteredPlants}) {
  const[searchInput, setSearchInput] = useState("")

  function handleChange(e){
    const input = e.target.value.toLowerCase()
    setSearchInput(input)

    const filteredPlants = plantList.filter((plant) => 
      plant.name.toLowerCase().includes(input)
    );
    setFilteredPlants(filteredPlants)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchInput}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
