import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchAPI from "../../utils/fetchAPI";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    status: "idle",
    queryTable: {},
    cars: [],
    latestPosts: [],
    currentPost: {},
    relevantCars: [],
    totalCars: 0,
    totalPages: 0,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCars.fulfilled, (state, action) => {
        if (!action.payload.error) {
          state.cars = action.payload.car_posts;
          state.totalPages = action.payload.total_pages;
          state.totalCars = action.payload.total_cars;
        } else {
          state.cars = [];
          state.totalPages = 0;
          state.totalCars = 0;
        }
        state.status = "idle";
      })
      .addCase(getLatestPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getLatestPosts.fulfilled, (state, action) => {
        if (!action.payload.error) {
          state.latestPosts = action.payload.latestPoweredPosts;
        } else {
          state.latestPosts = [];
        }
        state.status = "idle";
      })
      .addCase(getCar.fulfilled, (state, action) => {
        state.currentPost = action.payload;
      })
      .addCase(getRelevantCars.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRelevantCars.fulfilled, (state, action) => {
        state.relevantCars = action.payload.relevantPosts;
        state.status = "idle";
      })
      .addCase(getQueryTable.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getQueryTable.fulfilled, (state, action) => {
        state.queryTable = action.payload.query_table;
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

    const url = `/api/v1/posts/?${state.filters.valueFilter}`;

    let res = {};

    try {
      res = await fetchAPI(url);

      const { data } = res.data;

      return data;
    } catch (error) {
      return { error: true };
    }
  }
);

export const getPoweredCars = createAsyncThunk(
  "cars/getCars",
  async (page, { getState }) => {
    const state = getState();

    const url = `/api/v1/posts/powered?${state.filters.valueFilter}`;

    let res = {};

    try {
      res = await fetchAPI(url);

      const { data } = res.data;

      return data;
    } catch (error) {
      return { error: true };
    }
  }
);

export const getPremiumOrHigherCars = createAsyncThunk(
  "cars/getCars",
  async (page, { getState }) => {
    const state = getState();

    const url = `/api/v1/posts/premium-and-higher?${state.filters.valueFilter}`;

    let res = {};

    try {
      res = await fetchAPI(url);

      const { data } = res.data;

      return data;
    } catch (error) {
      return { error: true };
    }
  }
);

export const getCar = createAsyncThunk("/car/getCar", async (slug) => {
  const res = await fetchAPI("/api/v1/posts/" + slug);

  const { data } = res.data;

  return data;
});

export const getLatestPosts = createAsyncThunk(
  "/cars/getLatestPosts",
  async () => {
    const res = await fetchAPI("/api/v1/posts/powered/latest", "get", { headers: {
      'Content-Type': 'application/json',
    }});

    const { data } = res.data;

    return data;
  }
);

export const getRelevantCars = createAsyncThunk(
  "/cars/getRelevantCars",
  async (brandName) => {
    const res = await fetchAPI("/api/v1/posts/relevant?car_brand=" + brandName);

    const { data } = res.data;

    return data;
  }
);

export const getQueryTable = createAsyncThunk(
  "/cars/getQueryTable",
  async (brandName) => {
    const res = await fetchAPI("/api/v1/posts/query-table");

    const { data } = res.data;

    return data;
  }
);
