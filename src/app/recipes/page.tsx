import React from "react";
import getRecipes from "../lib/api/recipes";
import { Recipe } from "../lib/api/recipes";
import RecipeCard from "../components/RecipeCard";

const recipes: Recipe[] = await getRecipes();

function Page() {
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            photoUrl={recipe.photoUrl}
            cookTime={recipe.cookTime}
          />
        );
      })}
    </div>
  );
}

export default Page;
