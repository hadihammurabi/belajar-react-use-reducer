import { useReducer } from "react";

const initialState = {
  counter: 0,
};

export const ACTION = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

function reducer(state, action) {
  switch(action.type) {
    case ACTION.INCREMENT:
      return { counter: state.counter + 1 };
    case ACTION.DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

export const useCounter = () => {
  return useReducer(reducer, initialState);
}
