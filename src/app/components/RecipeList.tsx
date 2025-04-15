import React from "react";
import RecipeCard from "./RecipeCard";
import { Recipe } from "../lib/api/recipes";

interface RecipeList {
  recipes: Recipe[];
}

function RecipeList(props: RecipeList) {
  const { recipes } = props;
  return (
    <div className="flex flex-row flex-wrap gap-6 justify-center max-w-6xl mx-auto pt-10">
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

export default RecipeList;
