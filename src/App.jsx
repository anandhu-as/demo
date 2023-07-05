import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./features/CounterSlice";

const App = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}> increment</button>
    </div>
  );
};

export default App;
