import { SUBMIT_FORM } from "./FormTypes";

const initialstate = {
  name: "anandhu",
  age: 17,
};
export const FormReducer = (state = initialstate, { type ,payload}) => {
  switch (type) {
    case SUBMIT_FORM:return {...state,
    name:payload.name
    }
    default:
      return state;
  }
};
