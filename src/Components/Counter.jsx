import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Counter/CounterActions";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const Increment = () => dispatch(increment(100));
const Decrement=()=>dispatch(decrement(100))
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}> increment</button>
      <button onClick={Decrement}> Decrement</button>
    </div>
  );
};

export default Counter;
