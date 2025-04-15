import React from "react";
import getRecipes from "./lib/api/recipes";
import { Recipe } from "./lib/api/recipes";
import RecipeList from "./components/RecipeList";

const recipes: Recipe[] = await getRecipes();

export default function Home() {
  return (
    <div className="bg-neutral-50">
      <RecipeList recipes={recipes} />
    </div>
  );
}
