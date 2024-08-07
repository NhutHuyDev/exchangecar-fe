// import { createSelector } from "reselect";
// Car Selectors
export const statusCarsSelector = (state) => state.cars.status;
export const allCarsSelector = (state) => state.cars.cars;
export const latestPostsSelector = (state) => state.cars.latestPosts;
export const carTotalPageSelector = (state) => state.cars.totalPages;
export const totalCarsSelector = (state) => state.cars.totalCars;
export const carCurrentPageSelector = (state) => state.cars.currentPage;
export const currentPostSelector = (state) => state.cars.currentPost;
export const relevantCarsSelector = (state) => state.cars.relevantCars;
export const queryTableSelector = (state) => state.cars.queryTable;

// Filters
export const byBrandFilterSelector = (state) => state.filters.byBrand;
export const byModelFilterSelector = (state) => state.filters.byModel;
export const byCityFilterSelector = (state) => state.filters.byCity;
export const byPriceFilterSelector = (state) => state.filters.byPrice;
export const byYearManufactureFilterSelector = (state) =>
  state.filters.byYearManufacture;
export const byStatusFilterSelector = (state) => state.filters.byStatus;
export const byKmFilterSelector = (state) => state.filters.byKm;
export const orderBySelector = (state) => state.filters.orderBy;
export const byBodyTypeFilterSelector = (state) => state.filters.byBodyType;
export const byOriginFilterSelector = (state) => state.filters.byOrigin;
export const byEngineTypeFilterSelector = (state) => state.filters.byEngineType;
export const byTransmissionFilterSelector = (state) =>
  state.filters.byTransmission;
export const byDrivetrainFilterSelector = (state) =>
  state.filters.byDriveTrain;
export const byOutColorFilterSelector = (state) =>
  state.filters.byOutColor;
export const byTotalSeatingFilterSelector = (state) =>
  state.filters.byTotalSeating;
export const byTotalDoorsFilterSelector = (state) =>
  state.filters.byTotalDoors;

export const byPageFilterSelector = (state) => state.filters.byPage;
export const queryFilterSelector = (state) => state.filters.queryFilter;

// Auth
export const isAuthenticatedSelector = (state) => state.auth.isAuthenticated;
export const currentUserSelector = (state) => state.auth.currentUser;
export const otpVerificationSelector = (state) => state.auth.otpVerification;

// Upload
export const carDataSelector = (state) => state.sellCar.carData;

// Form
export const formDataSelector = (state) => state.form.data
