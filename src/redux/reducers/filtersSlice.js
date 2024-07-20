import { createSlice } from "@reduxjs/toolkit";
import convertToBrandModel from "../../utils/convertToBrandModel";

export default createSlice({
  name: "filters",
  initialState: {
    byBrandModel: {},
    byBrand: [],
    byModel: [],
    byBodyType: [],
    byPrice: [],
    byYearManufacture: [],
    byKm: [],
    byTransmission: [],
    byPage: 1,
    queryFilter: "",
  },
  reducers: {
    setInitialFilterState: (state, action) => {
      const searchParams = action.payload;
      //Brand Filter
      const queryByBrand = searchParams.get("car_brand");
      if (queryByBrand) {
        state.byBrand = queryByBrand.split(",");
      } else {
        state.byBrand = [];
      }

      //Model Filter
      const queryByModel = searchParams.get("car_model");
      if (queryByModel) {
        state.byModel = queryByModel.split(",");
      } else {
        state.byModel = [];
      }

      // Set byBrandModel
      state.byBrandModel = convertToBrandModel(state.byBrand, state.byModel);

      // Set byBodyType
      const queryByBodyType = searchParams.get("body_type");
      if (queryByBodyType) {
        state.byBodyType = queryByBodyType.split(",");
      } else {
        state.byBodyType = [];
      }

      // Set byPrice
      const queryByPrice = searchParams.get("price_filter");
      if (queryByPrice) {
        state.byPrice = queryByPrice.split(",").sort(function (a, b) {
          return a - b;
        });
      } else {
        state.byPrice = [];
      }

      // Set byYearManufacture
      const queryByYearManufacture = searchParams.get("year_of_manufacture");
      if (queryByYearManufacture) {
        state.byYearManufacture = queryByYearManufacture
          .split(",")
          .sort(function (a, b) {
            return a - b;
          });
      } else {
        state.byYearManufacture = [];
      }

      // Set byKm
      const queryByKm = searchParams.get("odo");
      if (queryByKm) {
        state.byKm = queryByKm.split(",").sort(function (a, b) {
          return a - b;
        });
      } else {
        state.byKm = [];
      }

      // Set byTransmission
      const queryByTransmission = searchParams.get("transmission");
      if (queryByTransmission) {
        state.byTransmission = queryByTransmission.split(",");
      } else {
        state.byTransmission = [];
      }

      // Set byPage
      const queryPage = searchParams.get("page");
      if (queryPage) {
        state.byPage = queryPage;
      } else {
        state.byPage = 1;
      }
    },
    setQueryFilter: (state, action) => {
      const queryArr = [];
      //Brand Filter
      if (state.byBrand.length) {
        queryArr.push("car_brand=" + state.byBrand.join(","));
      }

      //Model Filter
      if (state.byModel.length) {
        queryArr.push("car_model=" + state.byModel.join(","));
      }

      //Body Type Filter
      if (state.byBodyType.length) {
        queryArr.push("body_type=" + state.byBodyType.join(","));
      }

      //Price Filter
      if (state.byPrice.length) {
        queryArr.push("price_filter=" + state.byPrice.join(","));
      }

      //Year Manufacture Filter
      if (state.byYearManufacture.length) {
        queryArr.push(
          "year_of_manufacture=" + state.byYearManufacture.join(",")
        );
      }

      //byKm Filter
      if (state.byKm.length) {
        queryArr.push("odo=" + state.byKm.join(","));
      }

      //byTransmission Filter
      if (state.byTransmission.length) {
        queryArr.push("transmission=" + state.byTransmission.join(","));
      }

      //byTransmission Filter
      if (state.byPage > 1) {
        queryArr.push("page=" + state.byPage);
      }

      if (queryArr.length) {
        state.queryFilter = queryArr.join("&");
      } else {
        state.queryFilter = "";
      }
    },
    setBrandModelFilter: (state, action) => {
      state.byBrandModel = JSON.parse(JSON.stringify(action.payload));
    },
    setBrandFilter: (state, action) => {
      state.byBrand = action.payload;
    },
    setModelFilter: (state, action) => {
      state.byModel = action.payload;
    },
    setBodyTypeFilter: (state, action) => {
      state.byBodyType = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.byPrice = action.payload;
    },
    setYearManufactureFilter: (state, action) => {
      state.byYearManufacture = action.payload;
    },
    setKmFilter: (state, action) => {
      state.byKm = action.payload;
    },
    setTransmissionFilter: (state, action) => {
      state.byTransmission = action.payload;
    },
    setPageFilter: (state, action) => {
      state.byPage = action.payload;
    },
    clearAll: (state, action) => {
      state.byBrandModel = {};
      state.byBrand = [];
      state.byModel = [];
      state.byBodyType = [];
      state.byPrice = [];
      state.byYearManufacture = [];
      state.byKm = [];
      state.byTransmission = [];
      state.byPage = 1;
    },
    removeFilterValue: (state, action) => {
      const { typeOnClose, valueOnClose } = action.payload;

      switch (typeOnClose) {
        case "byKm":
          state.byKm = [];
          break;

        case "byYearManufacture":
          state.byYearManufacture = [];
          break;

        case "byPrice":
          state.byPrice = [];
          break;

        case "byBodyType":
          state.byBodyType.splice(state.byBodyType.indexOf(valueOnClose), 1);
          break;

        case "byBrandModel":
          let [brand, ...model] = valueOnClose.split(" ");
          model = model.join(" ");
          if (state.byModel.indexOf(model) >= 0) {
            state.byModel.splice(state.byModel.indexOf(model), 1);
          }
          console.log(model);
          if (state.byBrandModel[brand].indexOf(model) >= 0) {
            state.byBrandModel[brand].splice(
              state.byBrandModel[brand].indexOf(model),
              1
            );
          }
          if (state.byBrandModel[brand].length === 0) {
            delete state.byBrandModel[brand];
            state.byBrand.splice(state.byBrand.indexOf(brand), 1);
          }
          break;

        default:
          break;
      }
    },
  },
});
