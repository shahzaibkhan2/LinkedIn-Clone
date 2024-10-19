import { HomeContext } from "@/context/HomeContext";
import { useContext } from "react";

export const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error("Home context is missing !");
  }
  return context;
};
