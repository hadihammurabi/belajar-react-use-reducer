import { useContext, createContext } from "react";

export const ACTION = {
  TOGGLE: 'TOGGLE',
}

export const ConfigContext = createContext();

export  const useConfig = () => {
  return useContext(ConfigContext);
}
