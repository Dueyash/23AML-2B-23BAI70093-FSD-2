import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "./counterSlice";
import "./Counter.css";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState("");

  const handleIncrementByAmount = () => {
    const amount = parseInt(inputValue, 10);
    if (!isNaN(amount)) {
      dispatch(incrementByAmount(amount));
    }
  };

  const handleDecrementByAmount = () => {
    const amount = parseInt(inputValue, 10);
    if (!isNaN(amount)) {
      dispatch(decrementByAmount(amount));
    }
  };

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div className="counter-container">
      <div className="counter-display">
        <h2>Counter Value</h2>
        <div className="counter-value">{count}</div>
      </div>

      <div className="counter-controls">
        <h3>Basic Operations</h3>
        <div className="button-group">
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-decrement"
          >
            − Decrement
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-increment"
          >
            + Increment
          </button>
        </div>

        <div className="divider"></div>

        <h3>Custom Amount</h3>
        <div className="input-group">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter amount"
            className="input-field"
          />
          <div className="button-group">
            <button
              onClick={handleDecrementByAmount}
              className="btn btn-custom-dec"
            >
              − Decrease by
            </button>
            <button
              onClick={handleIncrementByAmount}
              className="btn btn-custom-inc"
            >
              + Increase by
            </button>
          </div>
        </div>

        <div className="divider"></div>

        <div className="reset-group">
          <button onClick={() => dispatch(reset())} className="btn btn-reset">
            Reset to 0
          </button>
          <button onClick={handleClear} className="btn btn-clear">
            Clear Input
          </button>
        </div>
      </div>
    </div>
  );
}
