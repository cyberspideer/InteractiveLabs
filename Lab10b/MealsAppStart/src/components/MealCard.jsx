// import React from 'react'
import React, { useState, useEffect } from 'react';


const MealCard = ({mealData, isRandom = false}) => {

  const [favorites, setFavorites] = useState([]);

useEffect(() => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  setFavorites(storedFavorites);
}, []);

// function
const toggleFavorite = () => {
  const isFav = favorites.find(fav => fav.idMeal === mealData.idMeal);
  let updatedFavorites;

  if (isFav) {
    updatedFavorites = favorites.filter(fav => fav.idMeal !== mealData.idMeal);
  } else {
    updatedFavorites = [...favorites, mealData];
  }

  setFavorites(updatedFavorites);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
};

  return (
    <div className="meal">
      <div className="meal-header">
          {isRandom && <span className="random">Meal of the Day</span>}
          <img src={mealData.strMealThumb} alt=""/>
      </div>
      <div className="meal-body">
          <h3>{mealData.strMeal}</h3>
        
              <button className="fav-btn" onClick={toggleFavorite}>
  {favorites.find(fav => fav.idMeal === mealData.idMeal)
    ? <i className="fas fa-heart" style={{ color: 'red' }}></i>
    : <i className="far fa-heart"></i>}


          </button>
      </div>
    </div>
  )
}

export default MealCard
