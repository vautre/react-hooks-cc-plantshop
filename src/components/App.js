import React, { useState, useEffect } from "react";
import Header from "./Header";
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';

function App() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  async function getPlants() {
    try {
      const response = await fetch("http://localhost:6001/plants")
      const plantData = await response.json()
      setPlants(plantData)
    } catch (error) {
      console.error("Error fetching plants:", error)
    }
  }

  const addPlant = (newPlant) => {
    setPlants([...plants, { ...newPlant, id: plants.length + 1 }])
  }

  const markAsSoldOut = (id) => {
    setPlants(plants.map(plant =>
      plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
    ))
  }

  useEffect(() => {
    getPlants()
  }, [])

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} />
      <NewPlantForm addPlant={addPlant} />
      <PlantList plants={filteredPlants} markAsSoldOut={markAsSoldOut} />
    </div>
  )
}

export default App;
