import { ReactNode } from "react";

export interface ICurrentUser {
  name: string;
  email: string;
}

export interface IUserInputValue {
  name?: string;
  email: string;
  password?: string;
  repeat_password?: string;
}

export interface IIngredientList {
  _id: string;
  parentId: string;
  title: string;
  extraClass?: string;
}

export interface IRecipe {
  id: number;
  title: string;
  ingredients: IIngredientList[];
}

export interface ISystemMessage {
  message: string;
  type: "success" | "error" | null;
  messageClass: string;
}

export interface ITooltip {
  popupName: string;
  isPopupOpen: boolean;
  children: ReactNode;
}
