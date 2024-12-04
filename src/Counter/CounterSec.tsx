import { useReducer, useState } from "react";
import "./style.css";
function countReducer(count: number, change: number) {
  return count + change;
}
function Counter({ initialCount = 0, step = 1 }) {
  const [count, changeCount] = useReducer(countReducer,initialCount);

 
  const increment = () => changeCount(+ step);
  const decrement = () => changeCount(- step);
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
