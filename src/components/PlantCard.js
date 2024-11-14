import React from "react";

function PlantCard({ plant, markAsSoldOut }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {/* Correct the check for soldOut */}
      {plant.soldOut ? (
        <button className="secondary">Out of Stock</button>
      ) : (
        <button className="primary" onClick={() => markAsSoldOut(plant.id)}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
