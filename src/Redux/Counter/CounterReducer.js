import { DECREMENT, INCREMENT } from "./CounterTypes";

const initialstate = {
  count: 0,
};
export const counterReducer = (state = initialstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
      case DECREMENT:
        return {
          ...state,
          count: state.count - action.payload,
        };
    default:
      return state;
  }
};
