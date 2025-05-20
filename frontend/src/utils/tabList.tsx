import { TabMain } from "@/components/Tabs/TabMain/TabMain";
import { TabIngredients } from "@/components/Tabs/TabIngredients/TabIngredients";
import { TabSteps } from "@/components/Tabs/TabSteps/TabSteps";
import { TabSave } from "@/components/Tabs/TabSave/TabSave";

export const tabList = [
  {
    title: "Описание",
    content: <TabMain />,
  },
  {
    title: "Ингредиенты",
    content: <TabIngredients />,
  },
  {
    title: "Приготовление",
    content: <TabSteps />,
  },
  {
    title: "Сохранение",
    content: <TabSave />,
  },
];
