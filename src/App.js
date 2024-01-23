import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("January 23 2024");
  date.setDate(date.getDate() + count);
  return (
    <div className="test">
      <div className="step">
        <button className="btn1" onClick={() => setStep((c) => c - 1)}>
          -
        </button>
        <span id="step">Step: {step}</span>
        <button className="btn2" onClick={() => setStep((c) => c + 1)}>
          +
        </button>
      </div>

      <div className="count">
        <button className="btn1" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <span id="count">count: {count}</span>
        <button className="btn2" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
