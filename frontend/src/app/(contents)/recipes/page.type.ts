import { IIngredientList } from "@/utils/interfaceList";

export interface IRecipes {
  _id: string;
  title: string;
  ingredients: IIngredientList[];
  steps: string[];
  category: string;
  duration: number;
  level: number;
  owner: string;
  dateCreated: number;
  dateUpdated: number;
  likes: string[];
  rating: string[];
}
