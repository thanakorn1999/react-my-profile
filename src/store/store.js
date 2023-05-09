import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducers/themeSlice";
import mobileSlice from "./reducers/mobileSlice";
import blogsSlice from "./reducers/blogsSlice";
//
export const store = configureStore({
  reducer: {
    theme: themeSlice,
    mobile: mobileSlice,
    blogs: blogsSlice,
  },
});
