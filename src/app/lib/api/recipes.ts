export interface Recipe {
  id: number;
  title: string;
  course: string;
  cuisine: string;
  mainIngredient: string;
  description: string;
  source: string;
  url: string;
  urlHost: string;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  yield: string;
  ingredients: string;
  directions: string;
  tags: string;
  rating: string;
  publicUrl: string;
  photoUrl: string;
  private: string;
  nutritionalScoreGeneric: string;
  calories: string;
  fat: string;
  cholesterol: string;
  sodium: string;
  sugar: string;
  carbohydrate: string;
  fiber: string;
  protein: string;
  cost: string;
}

const getRecipes = async () => {
  const url = process.env.NEXT_PUBLIC_RECIPE_API_URL;
  const imagePlaceholderUrl = process.env.NEXT_PUBLIC_IMAGE_PLACEHOLDER_URL;
  if (!url) throw new Error("API URL is not configured");
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data.map((recipe: Recipe) => ({
      ...recipe,
      photoUrl:
        recipe.photoUrl || `${imagePlaceholderUrl}?text=${recipe.title}`,
    }));
  } catch (error) {
    console.error(error);
  }
};

export default getRecipes;
