import { useReducer } from "react";
import { ACTION, ConfigContext } from "../hooks/useConfig";

const initialState = {
  darkMode: false,
};

function reducer(state, action) {
  switch(action.type) {
    case ACTION.TOGGLE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}

export const ConfigProvider = ({ children }) =>{
  const red = useReducer(reducer, initialState);

  return <ConfigContext.Provider value={red}>
    {children}
  </ConfigContext.Provider>
};
