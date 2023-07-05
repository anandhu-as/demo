import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, increment2 } from "./features/CounterSlice";
import Form from "./Components/Form";

const App = () => {
  const { count, count2 } = useSelector((state) => state.counter);
  const { name } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>

      <h1>{count2}</h1>
      <button onClick={() => dispatch(increment2())}>increment2</button>
      <button onClick={() => dispatch(increment())}> increment</button>
      <Form />
      <h2>{name}</h2>
    </div>
  );
};

export default App;
