import { SearchBar } from "@/components/SearchBar/SearchBar";
import { RecipesList } from "@/components/Recipes/RecipesList/RecipesList";
import { getRecipes } from "@/api/recipes";
import { IRecipes } from "./page.type";

export default async function Recipes() {
  const recipes: IRecipes[] = await getRecipes();

  return (
    <>
      <SearchBar />
      <RecipesList recipes={recipes} />
    </>
  );
}
