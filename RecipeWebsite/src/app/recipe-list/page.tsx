import { Button } from '@/components/ui/button';
import RecipeComponent from '@/components/recipeComponent';
import Link from 'next/link';
import React from 'react';
import { ModeToggle } from '@/components/ui/modeToggle';
import './recipe-list.css'; // Import your custom styles

const RecipeList = async () => {

  const fetchRecipesData = async () => {
      try {
          const apiResponse = await fetch('https://dummyjson.com/recipes');
          const data = await apiResponse.json();
          return data;
      } catch (error) {
          console.log(error);
      }
  }

  const recipesData = await fetchRecipesData();

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Recipe List</h1>
        </div>
        <div className="button-toggle-wrapper">
          <div className="button-group">
            <Link href={"/"}>
              <Button variant={"link"}>Go Home</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>

      <div className="recipe-grid">
        {recipesData && recipesData.recipes.length > 0 
          ? recipesData.recipes.map((e:any) => (
              <RecipeComponent key={e.id} name={e.name} image={e.image} rating={e.rating} cuisine={e.cuisine} id={e.id} />
            ))
          : <p className="not-found">The data is not found</p>
        }
      </div>
    </>
  );
}

export default RecipeList;