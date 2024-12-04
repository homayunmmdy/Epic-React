import { useReducer, useState } from "react";
import "./style.css";

type State = {
  count: number;
};
type Action = State;
const countReducer = (state: State, action: Action) => ({
  ...state,
  ...action,
});

function Counter({ initialCount = 0, step = 1 }) {
  const [state, setState] = useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;
  const increment = () => setState({ count: count + step });
  const decrement = () => setState({ count: count - step });
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
