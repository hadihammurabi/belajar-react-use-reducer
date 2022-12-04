import { useCallback } from "react";
import { useConfig } from "../hooks/useConfig";
import { useCounter, ACTION as COUNTER_ACTION } from "../hooks/useCounter";

const Counter = () => {
  const [state, dispatch] = useCounter();
  const [config] = useConfig();

  const increment = useCallback(() => {
    dispatch({type: COUNTER_ACTION.INCREMENT});
  });

  const decrement = useCallback(() => {
    dispatch({type: COUNTER_ACTION.DECREMENT});
  });

  return <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ fontSize: '100px', color: config.darkMode ? 'white': '' }}>{state.counter}</div>
    <div style={{ display: 'flex' }}>
      <div>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <button onClick={increment}>+</button>
      </div>
    </div>
  </div>;
};

export default Counter;
