import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchAPI from "../../utils/fetchAPI";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    status: "idle",
    cars: [],
    latestPost: [],
    currentCar: {},
    relevantCars: [],
    totalPage: 0,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCars.fulfilled, (state, action) => {
        if (!action.payload.error) {
          state.cars = action.payload.data;
          state.totalPage = action.payload.total_page;
        } else {
          state.cars = [];
          state.totalPage = 1;
        }
        state.status = "idle";
      }).addCase(getLatestPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getLatestPosts.fulfilled, (state, action) => {
        if (!action.payload.error) {
          state.latestPost = action.payload.data;
        } else {
          state.latestPost = [];
        }
        state.status = "idle";
      })
      .addCase(getCar.fulfilled, (state, action) => {
        state.currentCar = action.payload;
      })
      .addCase(getRelevantCars.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRelevantCars.fulfilled, (state, action) => {
        state.relevantCars = action.payload;
        state.status = "idle";
      });
  },
});

export default carsSlice;

// THUNK ACTION
export const getCars = createAsyncThunk(
  "cars/getCars",
  async (page, { getState }) => {
    const state = getState();

    const url = `/api/v1/posts/?${state.filters.queryFilter}${
      state.filters.pageFilter > 1 ? `page=${state.filters.pageFilter}` : ""
    }`;

    let res = {};

    try {
      res = await fetchAPI(url);

      console.log(res.data)

      return res.data;
    } catch (error) {
      return { error: true };
    }
  }
);

export const getCar = createAsyncThunk("/car/getCar", async (slug) => {
  const res = await fetchAPI("/api/core/car/" + slug);

  const { data } = res.data;

  return data;
});

export const getLatestPosts = createAsyncThunk(
  "/cars/latest",
  async () => {
    const res = await fetchAPI("/api/v1/posts/latest");

    const { data } = res.data;

    console.log(data)

    return data;
  }
);

export const getRelevantCars = createAsyncThunk(
  "/cars/getRelevantCars",
  async (brandName) => {
    const res = await fetchAPI("/api/core/cars/?car_brand=" + brandName);

    const { data } = res.data;

    // console.log(data);

    return data;
  }
);
