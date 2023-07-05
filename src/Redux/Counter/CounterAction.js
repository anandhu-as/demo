import { DECREMENT, INCREMENT, RESET } from "./CounterTypes";
export const increment = () => {
  //action creater , a function that returns an action
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  //action creater , a function that returns an action
  return {
    type: DECREMENT,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};
