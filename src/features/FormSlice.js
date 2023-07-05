import { createSlice } from "@reduxjs/toolkit";
const initialname = {
  name: "anandhu",
};
const FormSlice = createSlice({
  name: "Form",
  initialState: initialname,
  reducers: {
    submit: (state, action) => {
      {
        /* The payload holds the value that i provided as an argument in the submit function. */
      }
      state.name = action.payload.name,
      
    },
  },
});
export default FormSlice.reducer;
export const { submit } = FormSlice.actions;
