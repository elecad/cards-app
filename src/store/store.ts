import { create } from "zustand";
import { Layout } from "react-grid-layout";

interface ICard {
  id: string;
  name: string;
  iconSrc: string;
  layout: Omit<Layout, "i">;
}

interface IAppStore {
  cards: ICard[];
  isEdit: boolean;
  setEdit: (newValue: boolean) => void
}

const useAppStore = create<IAppStore>((set) => ({
  cards: [
    {
      id: "a",
      name: "Лента",
      iconSrc: "lenta.png",
      layout: { x: 1, y: 0, w: 1, h: 1 },
    },
    {
      id: "b",
      name: "Магнит",
      iconSrc: "magnit.png",
      layout: { x: 0, y: 0, w: 1, h: 1 },
    },
    {
      id: "c",
      name: "Планета здоровья",
      iconSrc: "planeta-zdorovya.png",
      layout: { x: 1, y: 1, w: 1, h: 1 },
    },
    {
      id: "d",
      name: "Пятёрочка",
      iconSrc: "5.png",
      layout: { x: 1, y: 1, w: 1, h: 1 },
    },
    {
      id: "e",
      name: "Лента",
      iconSrc: "lenta.png",
      layout: { x: 0, y: 1, w: 1, h: 1 },
    },
  ],
  isEdit: false,
  setEdit: (newValue: boolean) => set(() => ({ isEdit: newValue })),
}));

export default useAppStore;
