import { DECREMENT, INCREMENT } from "./CounterTypes";

export const increment = (number) => {
  return {
    type: INCREMENT,
    payload: number,
  };
};
export const decrement = (number) => {
  return {
    type: DECREMENT,
    payload: number,
  };
};
