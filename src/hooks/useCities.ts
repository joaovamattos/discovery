import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

export function useCities() {
  const value = useContext(CitiesContext);
  return value;
}
