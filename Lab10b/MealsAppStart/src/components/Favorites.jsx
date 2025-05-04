import React from "react";

const Favorites = ({ favoriteMeals = [] }) => {
  if (favoriteMeals.length === 0) {
    return (
      <div className="favorites-section">
        <h3>Favorites</h3>
        <p>No favorites yet.</p>
      </div>
    );
  }
 
  return (
    <div className="favorites-section">
      <h3>Favorites</h3>
      <ul className="favorites">
        {favoriteMeals.map(meal => (
          <li key={meal.idMeal}>
            <img 
              id="fav-img" 
              src={meal.strMealThumb} 
              alt={meal.strMeal}/>
            <span>{meal.strMeal}</span>
            <button className="clear">
              <i className="fas fa-window-close"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favorites
