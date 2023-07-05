import { createSlice } from "@reduxjs/toolkit";
const initialCount = { count: 0, count2: 10 };
const CounterSlice = createSlice({
  name: "counter",
  initialState: initialCount,
  reducers: {
    increment: (state) => {
      state.count = state.count + 5;
    },
    increment2: (state) => {
      state.count2 = state.count2 + 10;
    },
  },
});
export default CounterSlice.reducer;
export const { increment,increment2 } = CounterSlice.actions;
