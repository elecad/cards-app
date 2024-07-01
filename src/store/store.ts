import { create } from "zustand";
import { Layout } from "react-grid-layout";

const CARD_KEY = "cards";
const LAYOUT_KEY = "layout";

export interface ICard {
  id: string;
  name: string;
  iconSrc: string;
  base64: string;
  rawValue: string;
  description: string;
}

interface IAppStore {
  cards: ICard[];
  createCard: (newCard: ICard) => void;
  isDrawerOpen: boolean;
  setDrawerOpen: (newValue: boolean) => void;
  layout: Layout[];
  setLayout: (newArray: Layout[]) => void;
  selectedCard: ICard | null;
  setSelectedCard: (newValue: ICard) => void;
  isGridEdit: boolean;
  setGridEdit: (newValue: boolean) => void;
}

const LS = (key: string, defaultValue: any) => {
  const text = localStorage.getItem(key);

  try {
    return JSON.parse(text || JSON.stringify(defaultValue));
  } catch {
    return defaultValue;
  }
};

const useAppStore = create<IAppStore>((set) => ({
  // cards: [
  //   {
  //     id: "a",
  //     name: "Лента",
  //     iconSrc: "lenta.png",
  //     layout: { x: 1, y: 0, w: 1, h: 1 },
  //   },
  //   {
  //     id: "b",
  //     name: "Магнит",
  //     iconSrc: "magnit.png",
  //     layout: { x: 0, y: 0, w: 1, h: 1 },
  //   },
  //   {
  //     id: "c",
  //     name: "Планета здоровья",
  //     iconSrc: "planeta-zdorovya.png",
  //     layout: { x: 1, y: 1, w: 1, h: 1 },
  //   },
  //   {
  //     id: "d",
  //     name: "Пятёрочка",
  //     iconSrc: "5.png",
  //     layout: { x: 1, y: 1, w: 1, h: 1 },
  //   },
  //   {
  //     id: "e",
  //     name: "Лента",
  //     iconSrc: "lenta.png",
  //     layout: { x: 0, y: 1, w: 1, h: 1 },
  //   },
  // ],
  cards: LS(CARD_KEY, []),
  createCard: (newCard: ICard) =>
    set((state) => {
      const cards = [...state.cards, newCard];
      const newLayout: Layout = {
        i: newCard.id,
        x: state.layout.length % 2,
        y: 0,
        w: 1,
        h: 1,
      };
      const layout = [...state.layout, newLayout];

      localStorage.setItem(CARD_KEY, JSON.stringify(cards));
      localStorage.setItem(LAYOUT_KEY, JSON.stringify(layout));

      return { cards, layout };
    }),
  selectedCard: null,
  setSelectedCard: (newValue: ICard) => set(() => ({ selectedCard: newValue })),
  layout: LS(LAYOUT_KEY, []),
  setLayout: (newArray) =>
    set(() => {
      localStorage.setItem(LAYOUT_KEY, JSON.stringify(newArray));

      return { layout: newArray };
    }),
  isDrawerOpen: false,
  setDrawerOpen: (newValue: boolean) => set(() => ({ isDrawerOpen: newValue })),
  isGridEdit: false,
  setGridEdit: (newValue: boolean) => set(() => ({ isGridEdit: newValue })),
}));

export default useAppStore;
