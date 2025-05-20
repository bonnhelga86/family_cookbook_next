import { IRecipes } from "@/app/(contents)/recipes/page.type";

const baseUrl = "http://localhost:3000";

async function getResponseData(res) {
  if (!res.ok) {
    if (res.status === 500) {
      return Promise.reject("На сервере произошла ошибка.");
    } else {
      const errorResponse = await res.json();
      if (errorResponse.validation) {
        return Promise.reject(errorResponse.validation.body.message);
      } else {
        return Promise.reject(errorResponse.message);
      }
    }
  }
  return res.json();
}

export const getRecipes = (): Promise<IRecipes[]> => {
  return fetch(`${baseUrl}/recipes`, {
    method: 'GET',
    credentials: "include",
  }).then((res) => getResponseData(res));
};