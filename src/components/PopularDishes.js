import React from 'react';
import './PopularDishes.css';

const PopularDishes = () => {
  const dishes = ['Dish 1', 'Dish 2', 'Dish 3', 'Dish 4'];

  return (
    <div className="popular-dishes">
      <h2>Popular Dishes</h2>
      <div className="dishes-grid">
        {dishes.map((dish, index) => (
          <div key={index} className="dish-card">
            <h3>{dish}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
