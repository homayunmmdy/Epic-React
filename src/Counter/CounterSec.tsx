import { useReducer, useState } from "react";
import "./style.css";

type State = { count: number };
type Action =
  | { type: "increment"; step: number }
  | { type: "decrement"; step: number };
  function countReducer(state: State, action: Action) {
    const { type, step } = action
    switch (type) {
      case 'increment': {
        return {
          ...state,
          count: state.count + step,
        }
      }
      case 'decrement': {
        return {
          ...state,
          count: state.count - step,
        }
      }
    }
  }

function Counter({ initialCount = 0, step = 1 }) {
  const [state, dispatch] = useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;
  // 🐨 the logic has now been moved back to the reducer, update these to pass
  // the appropriate action object to the dispatch function
  const increment = () =>
    dispatch({type : 'increment', step});
  const decrement = () =>
    dispatch({type : 'decrement', step});
  return (
    <div className="counter">
      <output>{count}</output>
      <div>
        <button onClick={decrement}>⬅️</button>
        <button onClick={increment}>➡️</button>
      </div>
    </div>
  );
}

const CounterSec = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="app">
      <h1>Counter:</h1>
      <form>
        <div>
          <label htmlFor="step-input">Step</label>
          <input
            id="step-input"
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.currentTarget.value))}
          />
        </div>
      </form>
      <Counter step={step} />
    </div>
  );
};

export default CounterSec;
