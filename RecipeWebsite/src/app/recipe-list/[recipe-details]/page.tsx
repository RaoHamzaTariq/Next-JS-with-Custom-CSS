"use client";

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/modeToggle';
import Link from 'next/link';
import React from 'react';
import './recipe-details.css';

const RecipeDetails = async ({ params }: { params: { "recipe-details": number } }) => {

  const fetchRecipeDetails = async (recipeId: number) => {
      const apiResponse = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
      const data = await apiResponse.json();
      return data;
  }

  const RecipesDetailData = await fetchRecipeDetails(params["recipe-details"]);

  return (
    <div className="container">
      <div className="button-toggle-wrapper">
        <Link href={"/recipe-list"}>
          <Button variant={"link"}>Go to recipe list</Button>
        </Link>
        <ModeToggle />
      </div>
      
      <div className="recipe-details">
        <div>
          <img className="recipe-image" src={RecipesDetailData.image} alt={RecipesDetailData.name} />
        </div>
        <div className="flex flex-col gap-5">
          <div className="title">
            <h1>{RecipesDetailData.name}</h1>
          </div>
          <div className="info">
            <h4><span className="text-lg font-normal">Cuisine:</span> {RecipesDetailData.cuisine}</h4>
            <h4><span className="text-lg font-normal">Meal Type:</span> {RecipesDetailData.mealType}</h4>
          </div>
          <div>
            <h3 className="font-bold">Ingredients</h3>
            <ul className="ingredients list-disc list-inside">
              {RecipesDetailData.ingredients.map((ingredient:string, index:number) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-bold mt-5">Instructions</h3>
          <ul className="instructions list-decimal list-inside">
            {RecipesDetailData.instructions.map((instruction:string, index:number) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails;