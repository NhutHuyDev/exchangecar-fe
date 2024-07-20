import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "sellCar",
  initialState: {
    carData: {
      brand: "",
      type: "",
      email: "",
      seat: "",
      year: "",
      origin: "",
      transmission: "",
      mileage: "",
      images: "",
    },
  },
  reducers: {
    setUploadCarData: (state, action) => {
      state.carData = action.payload;
    },
  },
});
