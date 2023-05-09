import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//
import axios from "axiosinstance";
import { resolvePath } from "react-router-dom";

const initialState = {
  blogs: [],
  status: "idle",
  error: null,
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  // const response = await axios
  //   .get("/guest/test")
  //   .then((response) => {
  //     if (response.data.success === "success") {
  //       return response.data.message;
  //     } else {
  //       console.log(response.data.message_th);
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // console.log("createAsyncThunk fetchBlogs", response);
  // return response;
  const response = await axios.get("/guest/blogs");
  if (response.data.success === "success") {
    return response.data.message;
  } else {
    console.log(response.data.message_th);
    throw new Error(response.data.message_th);
  }
});

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        console.log(`loading`);
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        console.log(`succeeded`);
        state.status = "succeeded";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        console.log(`failed`);
        console.log(`action`, action);
        state.status = "failed";
        state.blogs = [];
        state.error = action.error.message;
      });
  },
  reducers: {
    // addBlog: (state, action) => {
    //   state.push(action.payload);
    // },
    // updateBlog: (state, action) => {
    //   const { id, ...updatedFields } = action.payload;
    //   const blogToUpdate = state.find((blog) => blog.id === id);
    //   Object.assign(blogToUpdate, updatedFields);
    // },
    // deleteBlog: (state, action) => {
    //   const index = state.findIndex((blog) => blog.id === action.payload);
    //   state.splice(index, 1);
    // },
  },
});

export const { addBlog, updateBlog, deleteBlog } = blogsSlice.actions;
export default blogsSlice.reducer;
