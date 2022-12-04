import { useReducer } from "react";

const initialState = {
  todos: [],
};

export const ACTION = {
  ADD: 'ADD',
  DONE: 'DONE',
  DELETE: 'DELETE',
}

function reducer(state, action) {
  switch(action.type) {
    case ACTION.ADD:
      return { ...state, todos: [...state.todos, newTodo(action.input)] };
    case ACTION.DONE: {
      const todos = state.todos.map(todo => {
        if (todo.id == action.id) {
          todo.done = true;
        }

        return todo;
      });
      return { ...state, todos };
    }
    case ACTION.DELETE:{
        const todos = state.todos.filter(todo => todo.id != action.id);
        return { ...state, todos };
    }
    default:
      return state;
  }
}

const newTodo = (input) => ({
  id: Date.now(),
  title: input,
  done: false,
});

export const useTodo = () => {
  return useReducer(reducer, initialState);
}
