
import Home from './pages/Home'
import './App.css'
import { useState, useEffect } from 'react';

function App() {
  // const [meals, setMeals] = useState([]);
const [favorites, setFavorites] = useState([]);

useEffect(() => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  setFavorites(storedFavorites);
}, []);

const toggleFavorite = (meal) => {
  const isFav = favorites.find(fav => fav.idMeal === meal.idMeal);
  const updated = isFav;

  if (isFav) {
    updatedFavorites = favorites.filter(fav => fav.idMeal !== meal.idMeal);
  } else {
    updatedFavorites = [...favorites, meal];
  }

  setFavorites(updatedFavorites);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
};



  return (
    <>
       <Home 
  toggleFavorite={toggleFavorite} 
  favorites={favorites} 
/>
    </>
  )
}

export default App
