import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlice";
import FormSlice from "../features/FormSlice";
export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    form:FormSlice
  },
});
