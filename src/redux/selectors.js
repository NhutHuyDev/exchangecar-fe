// import { createSelector } from "reselect";
// Car Selectors
export const statusCarsSelector = (state) => state.cars.status;
export const allCarsSelector = (state) => state.cars.cars;
export const latestPostsSelector = (state) => state.cars.latestPost;
export const carTotalPageSelector = (state) => state.cars.totalPage;
export const carCurrentPageSelector = (state) => state.cars.currentPage;
export const currentCarSelector = (state) => state.cars.currentCar;
export const relevantCarsSelector = (state) => state.cars.relevantCars;

// Filters
export const byBrandModelFilterSelector = (state) => state.filters.byBrandModel;
export const byBodyTypeFilterSelector = (state) => state.filters.byBodyType;
export const byPriceFilterSelector = (state) => state.filters.byPrice;
export const byYearManufactureFilterSelector = (state) =>
  state.filters.byYearManufacture;
export const byKmFilterSelector = (state) => state.filters.byKm;
export const byTransmissionFilterSelector = (state) =>
  state.filters.byTransmission;
export const byPageFilterSelector = (state) => state.filters.byPage;
export const queryFilterSelector = (state) => state.filters.queryFilter;

// Auth
export const isAuthenticatedSelector = (state) => state.auth.isAuthenticated;
export const currentUserSelector = (state) => state.auth.currentUser;
export const otpVerificationSelector = (state) => state.auth.otpVerification;

// Upload
export const carDataSelector = (state) => state.sellCar.carData;
