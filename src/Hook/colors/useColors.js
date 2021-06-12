import { useContext } from "react";
import { ColorsContext } from "./ColorsProvider";

export const useColors = () => useContext(ColorsContext);
