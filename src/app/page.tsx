import React from "react";
import getRecipes from "./lib/api/recipes";
import { Recipe } from "./lib/api/recipes";
import RecipeList from "./components/RecipeList";

const recipes: Recipe[] = await getRecipes();

export default function Home() {
  return (
    <div className="bg-[#f9fafb]">
      <h1 className="text-center pt-10 font-sans font-bold text-2xl">
        Recipes
      </h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}
