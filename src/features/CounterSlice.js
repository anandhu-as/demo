import { createSlice } from "@reduxjs/toolkit";
const initialCount = { count: 0 };
const CounterSlice = createSlice({
  name: "counter",
  initialState: initialCount,
  reducers: {
    increment: (state) =>{
        state.count=state.count+5
    }
  },
});
export default CounterSlice.reducer;
export const { increment } = CounterSlice.actions;
