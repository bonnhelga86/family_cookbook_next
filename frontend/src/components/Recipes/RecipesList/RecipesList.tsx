"use client";

import { FC } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { RecipesItem } from "@/components/Recipes/RecipesItem/RecipesItem";
import { PopupAddRecipe } from "@/components/Popups/PopupAddRecipe/PopupAddRecipe";
import { PopupIngredients } from "@/components/Popups/PopupIngredients/PopupIngredients";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setPopupType } from "@/lib/slices/popupSlice";
import { IRecipeListProps } from "./RecipeList.type"; 
import "./RecipesList.scss";

export const RecipesList: FC<IRecipeListProps> = ({recipes}) => {
  const isLogin = useAppSelector((state) => state.users.isLogin);
  const dispatch = useAppDispatch();
  console.log('recipes', recipes);

  return (
    <>
      <section className="recipes">
        <Container>
          {isLogin && (
            <Button
              onClick={() => dispatch(setPopupType("addRecipe"))}
              size="lg"
              className="recipes__button"
            >
              Добавить рецепт
            </Button>
          )}

          <Stack direction="horizontal">
            <ul className="recipes__card-list">
              {recipes.map((recipe) => (
                <RecipesItem recipe={recipe} key={recipe._id} />
              ))}
            </ul>
          </Stack>
        </Container>
      </section>

      <PopupAddRecipe />
      <PopupIngredients />
    </>
  );
};
