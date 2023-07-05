import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Redux/Counter/CounterAction";
export const Counter = () => {
  const count = useSelector((state) => state.count); ///it  returns the state
  const dispatch = useDispatch();
  const Increment = () => {
    dispatch(increment());
  };
  const Decrement = () => {
    dispatch(decrement());
  };
  const Reset = () => {
    dispatch(reset());
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>increment</button>
      <button onClick={Decrement}>decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};
