import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import CartItem from './CartItem.jsx';
import './ProductList.css';

// 3 categories, 6 unique plants each (thumbnail, name, description, price)
const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: '/images/snake-plant.svg', description: 'Produces oxygen at night and removes toxins from the air.', cost: 15 },
      { name: 'Spider Plant', image: '/images/spider-plant.svg', description: 'Filters formaldehyde and xylene from the air.', cost: 12 },
      { name: 'Peace Lily', image: '/images/peace-lily.svg', description: 'Removes mold spores and purifies the air.', cost: 18 },
      { name: 'Boston Fern', image: '/images/boston-fern.svg', description: 'Adds humidity to the air and removes pollutants.', cost: 20 },
      { name: 'Rubber Plant', image: '/images/rubber-plant.svg', description: 'Easy to care for and great at absorbing airborne toxins.', cost: 17 },
      { name: 'English Ivy', image: '/images/english-ivy.svg', description: 'Reduces airborne mold and filters toxins.', cost: 14 },
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      { name: 'Lavender', image: '/images/lavender.svg', description: 'Calming scent that helps with relaxation and sleep.', cost: 20 },
      { name: 'Jasmine', image: '/images/jasmine.svg', description: 'Sweet fragrance that lifts the mood.', cost: 18 },
      { name: 'Rosemary', image: '/images/rosemary.svg', description: 'Fragrant herb used in cooking and aromatherapy.', cost: 15 },
      { name: 'Mint', image: '/images/mint.svg', description: 'Refreshing aroma, perfect for teas and drinks.', cost: 12 },
      { name: 'Lemon Balm', image: '/images/lemon-balm.svg', description: 'Lemon scented herb that reduces stress.', cost: 14 },
      { name: 'Basil', image: '/images/basil.svg', description: 'Sweet aroma and a favourite herb for the kitchen.', cost: 10 },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { name: 'Aloe Vera', image: '/images/aloe-vera.svg', description: 'Soothing gel for skin care, very low maintenance.', cost: 14 },
      { name: 'Jade Plant', image: '/images/jade-plant.svg', description: 'A symbol of good luck that stores water in its leaves.', cost: 16 },
      { name: 'Echeveria', image: '/images/echeveria.svg', description: 'Rosette shaped succulent in beautiful colours.', cost: 13 },
      { name: 'Haworthia', image: '/images/haworthia.svg', description: 'Small striped succulent that grows well indoors.', cost: 11 },
      { name: "Burro's Tail", image: '/images/burros-tail.svg', description: 'Trailing stems, perfect for hanging pots.', cost: 19 },
      { name: 'Prickly Pear Cactus', image: '/images/prickly-pear.svg', description: 'Hardy cactus that needs very little water.', cost: 22 },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // false = Plants page, true = Cart page
  const [showCart, setShowCart] = useState(false);

  // Total number of items in the cart (shown next to the cart icon)
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // A plant's button is disabled once the plant is in the cart
  const isInCart = (plantName) => cartItems.some((item) => item.name === plantName);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      {/* Navbar: shown on both the Plants page and the Cart page */}
      <nav className="navbar">
        <a href="/" className="navbar-brand" onClick={handleHomeClick}>
          <span className="navbar-logo" aria-hidden="true">&#127807;</span>
          <span>
            <span className="navbar-title">Paradise Nursery</span>
            <span className="navbar-subtitle">Where Green Meets Serenity</span>
          </span>
        </a>
        <div className="navbar-links">
          <a href="/" onClick={handleHomeClick}>Home</a>
          <a href="/" onClick={handlePlantsClick}>Plants</a>
          <a href="/" onClick={handleCartClick} className="cart-link" aria-label="Cart">
            <svg className="cart-icon" viewBox="0 0 256 256" width="34" height="34" aria-hidden="true">
              <rect width="256" height="256" fill="none" />
              <circle cx="80" cy="216" r="12" fill="currentColor" />
              <circle cx="184" cy="216" r="12" fill="currentColor" />
              <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
            {/* Dynamic number of items in the cart */}
            <span className="cart-count">{totalQuantity}</span>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((group) => (
            <section key={group.category} className="category-section">
              <h2 className="category-title">{group.category}</h2>
              <div className="product-list">
                {group.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <h3 className="product-title">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <p className="product-price">${plant.cost}</p>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.name)}
                    >
                      {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
