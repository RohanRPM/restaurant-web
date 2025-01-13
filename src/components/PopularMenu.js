import React from 'react';
import './PopularMenu.css';

const PopularMenu = () => {
  const menuItems = [
    {
      name: "Boiled organic egg",
      price: "$12.00",
      description: "Lorem ipsum has been the industry.",
      image: "images/egg.jpg",
    },
    {
      name: "Chicken breast burger",
      price: "$10.00",
      description: "Lorem ipsum has been the industry.",
      image: "images/burger.jpg",
    },
    {
      name: "Medium spicy chips",
      price: "$08.00",
      description: "Lorem ipsum has been the industry.",
      image: "images/chips.jpg",
    },
  ];

  return (
    <div className="popular-menu">
      <div className="menu-header">
        <p className="menu-subtitle">- CHOOSE DELICIOUS -</p>
        <h2 className="menu-title">POPULAR MENU</h2>
      </div>
      <div className="menu-categories">
        <span className="active-category">Starters</span>
        <span>Non-veg</span>
        <span>Vegetarian</span>
        <span>Dessert</span>
        <span>Drinks</span>
      </div>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
            </div>
            <span className="menu-item-price">{item.price}</span>
          </div>
        ))}
      </div>
      <div className="menu-footer">
        <span className="menu-footer-badge">Masterchef</span>
        <p>
          Unique and delicious dishes from the world's <span className="highlight">best masterchefs</span>.
        </p>
      </div>
    </div>
  );
};

export default PopularMenu;
