import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementby5, reset } from "../Redux/Counter/CounterAction";
export const Counter = () => {
  const count = useSelector((state) => state.count); ///it  returns the state
  const count2=useSelector((state)=>state.count2)
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
  const Incrment5=()=>{
    dispatch(incrementby5() )
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>increment</button>
      <button onClick={Decrement}>decrement</button>
      <button onClick={Reset}>Reset</button>
      <h1>{count2}</h1>
      <button onClick={Incrment5}>Increment5</button>
    </div>
  );
};
