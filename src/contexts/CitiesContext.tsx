import React, { createContext, useState, ReactNode } from "react";

import CityProps from "../@types/CityProps";

interface SavedCity extends CityProps {
  rating?: number;
}

type CitiesContextType = {
  savedCities: CityProps[];
  handleSetSavedCities: (city: SavedCity) => void;
  handleDeleteCity: (city: SavedCity) => void;
};

type CitiesContextProviderProps = {
  children: ReactNode;
};

export const CitiesContext = createContext({} as CitiesContextType);

export function CitiesContextProvider(props: CitiesContextProviderProps) {
  const [savedCities, setSavedCities] = useState<SavedCity[]>([]);

  function handleSetSavedCities(city: SavedCity) {
    setSavedCities((oldState) => (oldState ? [...oldState, city] : [city]));
  }

  function handleDeleteCity(city: SavedCity) {
    if (savedCities.length === 1) {
      setSavedCities([]);
    } else {
      setSavedCities((oldstate) =>
        oldstate.filter((old) => old.id !== city.id)
      );
    }
  }

  return (
    <CitiesContext.Provider
      value={{ savedCities, handleSetSavedCities, handleDeleteCity }}
    >
      {props.children}
    </CitiesContext.Provider>
  );
}
