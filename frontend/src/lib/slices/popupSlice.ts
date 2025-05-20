import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { IIngredientList } from "@/utils/interfaceList";

interface IPreparePopupPayload {
  top: string;
  left: string;
  ingredients: IIngredientList[] | null;
}

export interface IPopupState extends IPreparePopupPayload {
  popupType: string | null;
}

const initialState: IPopupState = {
  popupType: null,
  top: "",
  left: "",
  ingredients: null,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setPopupType: (state, action: PayloadAction<string | null>) => {
      state.popupType = action.payload;
    },
    preparePopup: (state, action: PayloadAction<IPreparePopupPayload>) => {
      state.top = action.payload.top;
      state.left = action.payload.left;
      state.ingredients = action.payload.ingredients;
    },
  },
});

export const { setPopupType, preparePopup } = popupSlice.actions;

export const popupType = (state: RootState) => state.popup.popupType;
export const top = (state: RootState) => state.popup.top;
export const left = (state: RootState) => state.popup.left;
export const ingredients = (state: RootState) => state.popup.ingredients;

export default popupSlice.reducer;
