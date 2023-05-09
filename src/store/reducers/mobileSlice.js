import { createSlice } from "@reduxjs/toolkit";
//
const initialState = {
  isMobile: true,
};
export const mobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsMobile } = mobileSlice.actions;

export default mobileSlice.reducer;
