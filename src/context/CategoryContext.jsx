import { createContext, useContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

export function CategoryContextProvider({ children }) {

  const [stateCategory, setCategory] = useState({category:0,subcategory:0,folder:0});

  const value = {
    setCategory,
    stateCategory,
  };
  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
}