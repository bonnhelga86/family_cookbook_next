import { RecipesIngredients } from "../RecipesIngredients/RecipesIngredients";
import Card from "react-bootstrap/Card";
import { IIngredientList } from "@/utils/interfaceList";
import { IRecipes } from "@/app/(contents)/recipes/page.type";

export const RecipesItem = ({ recipe }: { recipe: IRecipes }) => {
  function getIngredientList(ingredients: IIngredientList[]) {
    if (ingredients.length <= 6) {
      return ingredients;
    } else {
      const ingredientList = ingredients.slice(0, 5);
      ingredientList.push({
        _id: '0',
        parentId: '0',
        title: "Ещё...",
        extraClass: "more",
      });
      return ingredientList;
    }
  }

  return (
    <>
      <li className="recipes__card-item">
        <Card bg="light" text="dark" className="recipes__card">
          <Card.Header className="recipes__title"> {recipe.title} </Card.Header>
          <Card.Body className="recipes__body">
            <Card.Title className="recipes__ingredient-title">
              {" "}
              Состав{" "}
            </Card.Title>
            <ul className="recipes__ingredient-list">
              {getIngredientList(recipe.ingredients).map(
                (list) => (
                  <RecipesIngredients
                    key={list._id}
                    list={list}
                    ingredients={recipe.ingredients}
                  />
                )
              )}
            </ul>
          </Card.Body>
        </Card>
      </li>
    </>
  );
};
