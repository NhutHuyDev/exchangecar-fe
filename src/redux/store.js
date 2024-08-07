import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./reducers/carsSlice";
import filtersSlice from "./reducers/filtersSlice";
import authSlice from "./reducers/authSlice";
import sellCarSlice from "./reducers/sellCarSlice";
import formSlice from "./reducers/formSlice";

const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
    filters: filtersSlice.reducer,
    auth: authSlice.reducer,
    sellCar: sellCarSlice.reducer,
    form: formSlice.reducer
  },
});

export default store;
