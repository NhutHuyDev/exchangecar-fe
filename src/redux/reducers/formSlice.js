import { createSlice } from "@reduxjs/toolkit";

const formSlice =  createSlice({
  name: "form",
  initialState: {
    data: {}
  },
  reducers: {
    setFormData: (state, action) => {
      state.data = action.payload;
    },
    resetFormData: (state, action) => {
        state.data = action.payload
    }
  },
});

export default formSlice;