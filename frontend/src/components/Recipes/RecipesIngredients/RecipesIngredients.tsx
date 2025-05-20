"use client";

import { useAppDispatch } from "@/lib/hooks";
import { setPopupType, preparePopup } from "@/lib/slices/popupSlice";
import { IIngredientList } from "@/utils/interfaceList";

export const RecipesIngredients = ({
  list,
  ingredients,
}: {
  list: IIngredientList;
  ingredients: IIngredientList[];
}) => {
  const dispatch = useAppDispatch();

  const events =
    "extraClass" in list
      ? {
          onMouseOver: (event: React.MouseEvent<HTMLLIElement>) =>
            handleOpenMoreIngredients(event, ingredients),
          onMouseOut: () => dispatch(setPopupType(null)),
        }
      : {};

  function handleOpenMoreIngredients(
    event: React.MouseEvent<HTMLLIElement>,
    ingredients: IIngredientList[]
  ) {
    const { x, y } = event.nativeEvent;
    dispatch(
      preparePopup({
        top: y - 100 + "px",
        left: x - 200 + "px",
        ingredients,
      })
    );
    dispatch(setPopupType("ingredients"));
  }

  return (
    <li
      className={`recipes__ingredient-item ${
        list.extraClass ? "recipes__ingredient-" + list.extraClass : ""
      }`}
      {...events}
    >
      {list.title}
    </li>
  );
};
