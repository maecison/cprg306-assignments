"use strict";
import React, { useEffect, useState } from "react";

const MealIdeas = ({ingredients}) => {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas() {
        const ingredientsWithoutEmoji = ingredients.replace(/\p{Emoji}/gu, '');
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientsWithoutEmoji}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async function fetchMealDetails(mealId) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const data = await response.json();
            return data.meals[0];
        } catch (error) {
            console.error(error);
        }
    };

    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas();
        setMeals(mealIdeas);
    };

    async function handleMealClick(mealId) {
        const newMeals = [...meals];
        const mealIndex = newMeals.findIndex(meal => meal.idMeal === mealId);
    
        if (newMeals[mealIndex].details) {
            newMeals[mealIndex].details = null;
        } else {
            newMeals[mealIndex].details = await fetchMealDetails(mealId);
        }
    
        setMeals(newMeals);
    };

    useEffect(() => {
        if (ingredients.length > 0) {
            loadMealIdeas();
        }
    }, [ingredients]);

    return (
        <main className="flex flex-col items-center">
            <h1 className="text-3xl text-gray-800 font-bold mb-4 text-center">
                Meal Ideas for {ingredients}
            </h1>
            {meals.length === 0 ?
                <p className="text-gray-800 text-xl">No meal ideas found for {ingredients}</p> :
                <ul className="space-y-4">
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="flex flex-col items-center bg-white rounded-lg p-4 shadow-md" onClick={() => handleMealClick(meal.idMeal)}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-20 h-20 object-cover rounded-lg"/>
                            <p className="mt-2 text-xl text-gray-800">{meal.strMeal}</p>
                            {meal.details && (
                                <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
                                    <h2 className="text-2xl text-gray-800 font-bold mb-2">{meal.details.strMeal}</h2>
                                    <h3 className="text-xl text-gray-800 font-bold mb-1">Ingredients:</h3>
                                    <ul>
                                        {Object.entries(meal.details).filter(([key, value]) => key.startsWith('strIngredient') && value).map(([key, value], index) => (
                                            <li key={index}>{value}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            }
        </main>
    );
};

export default MealIdeas;