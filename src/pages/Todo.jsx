import { useState } from "react";
import { useCallback } from "react";
import { useTodo, ACTION as TODO_ACTION } from "../hooks/useTodo";

const Todo = () => {
  const [state, dispatch] = useTodo();
  const [todoInput, setTodoInput] = useState('');

  const add = useCallback((e) => {
    e.preventDefault();

    if (!!todoInput) {
      dispatch({ type: TODO_ACTION.ADD, input: todoInput });
    }
    setTodoInput('');
  }, [todoInput]);

  const done = useCallback((id) => {
    dispatch({ type: TODO_ACTION.DONE, id });
  }, []);

  const del = useCallback((id) => {
    dispatch({ type: TODO_ACTION.DELETE, id });
  }, []);

  return <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex' }}>
      <form onSubmit={add}>
        <input value={todoInput} onChange={e => setTodoInput(e.target.value)} />
        <button>Save</button>
      </form>
    </div>

    <ul>
      {
        state.todos.map(todo => {
          return <TodoItem
            key={todo.id}
            todo={todo}
            onDone={done}
            onDelete={del}
          />
        })
      }
    </ul>
  </div>;
};

const TodoItem = ({ todo, onDone, onDelete }) => {
  return <li style={{display: 'flex'}}>
    <div style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.title}</div>
    {
      todo.done ?
      <button onClick={() => onDelete(todo.id)}>delete</button> :
      <button onClick={() => onDone(todo.id)}>done</button>
    }
  </li>;
};

export default Todo;
