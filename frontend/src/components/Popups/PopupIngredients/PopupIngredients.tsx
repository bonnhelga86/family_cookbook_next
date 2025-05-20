import { useAppSelector } from "@/lib/hooks";
import { IIngredientList } from "@/utils/interfaceList";
import "./PopupIngredients.scss";

export const PopupIngredients = () => {
  const popupType = useAppSelector((state) => state.popup.popupType);
  const ingredients: IIngredientList[] = useAppSelector((state) => state.popup.ingredients);
  const top = useAppSelector((state) => state.popup.top);
  const left = useAppSelector((state) => state.popup.left);

  return (
    <div
      className={`popup popup-ingredients popup_events-none ${
        popupType === "ingredients" ? "popup_opened" : ""
      }`}
    >
      <div
        className="popup__container popup__container_size_small"
        style={{ top, left }}
      >
        <ul className="popup-ingredients__list">
          {ingredients &&
            ingredients.map((ingredient) => {
              return (
                <li className="popup-ingredients__item" key={ingredient._id}>
                  {ingredient.title}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
