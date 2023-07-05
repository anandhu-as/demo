import { combineReducers } from "redux";
import { counterReducer } from "./Counter/CounterReducer";
import { FormReducer } from "./Form/FormReducer";

export const RootReducer=combineReducers({counter:counterReducer,form:FormReducer})