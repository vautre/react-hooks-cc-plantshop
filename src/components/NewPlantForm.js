import React, {useState} from "react";

function NewPlantForm({addPlant}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    addPlant({ name, image, price:parseFloat(price), soldOut: false })
    setName("")
    setImage("")
    setPrice("")
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name" 
        onChange={(event) => setName(event.target.value)} 
        />

        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        onChange={(event) => 
        setImage(event.target.value)} 
        />

        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        onChange={(event) => setPrice(event.target.value)} 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;