

import Search from "../components/Search";
import Favorites from "../components/Favorites";
import MealCard from "../components/MealCard";
import { useEffect, useState } from "react";


const RANDOM_API = import.meta.env.VITE_RANDOM_MEAL_API;
const MEAL_BYID_API = import.meta.env.VITE_MEAL_BYID_API;
const SEARCH_API = import.meta.env.VITE_SEARCH_MEAL_API;

const Home = ({ toggleFavorite, favorites }) => {

  const [randomMeal, setRandomMeal] = useState(null);
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  //console.log(RANDOM_API)

  useEffect(() => {
    loadRandomMeal();
  },[])

  const loadRandomMeal = async () => {
    const resp = await fetch(RANDOM_API);
    const data = await resp.json();
    let meal = data.meals[0];
    console.log(meal);
    setRandomMeal(meal);
  }

  const getMealById = async (id) => {
    const resp = await fetch(MEAL_BYID_API + id);
    const data = await resp.json();
    let meal = data.meals[0];
    //console.log(meal);
    return meal;
  }

  const [searchResults, setSearchResults] = useState([]);

const handleSearch = async (term) => {
  try {
    const resp = await fetch(`${SEARCH_API}${term}`);
    const data = await resp.json();
    setSearchResults(data.meals || []); // fallback to empty array if no results
  } catch (err) {
    console.error("Error searching meals:", err);
    setSearchResults([]);
  }
};

  return (
    <div className="store">
    <Search/>
    
     <Favorites 
   favoriteMeals={favorites} 
   toggleFavorite={toggleFavorite} 
    />
    
    <div className="meals" id="meals">
      {randomMeal && (
      <MealCard 
      mealData={randomMeal} 
      toggleFavorite={toggleFavorite} 
      favorites={favorites}
      />
      )}
    </div>
    
  </div>
  )
}

export default Home;
