import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    // byBrandModel: {},
    byBrand: null,
    byModel: null,
    byYearManufacture: [],
    byCity: null,
    byPrice: [],
    byStatus: null,
    orderBy: '-posted_at',

    byBodyType: [],
    byKm: [],
    byTransmission: [],
    byPage: 1,
    queryFilter: "",
    valueFilter: "",
  },
  reducers: {
    setInitialFilterState: (state, action) => {
      const searchParams = action.payload;

      //Brand Filter
      const queryByBrand = searchParams.get("car_brand");
      state.byBrand = queryByBrand;

      //Model Filter
      const queryByModel = searchParams.get("car_model");
      state.byModel = queryByModel;

      // Set byYearManufacture
      const queryByYearManufacture = searchParams.get("manufacturing_date");
      if (queryByYearManufacture) {
        state.byYearManufacture = queryByYearManufacture
          .split(",")
          .sort(function (a, b) {
            return a - b;
          });
      } else {
        state.byYearManufacture = [];
      }

      // Set byCity
      const queryByCity = searchParams.get("city");
      state.byCity = queryByCity;

      // Set byPrice
      const queryByPrice = searchParams.get("selling_price");
      if (queryByPrice) {
        state.byPrice = queryByPrice.split(",").sort(function (a, b) {
          return a - b;
        });
      } else {
        state.byPrice = [];
      }

      // Set byStatus
      const queryByStatus = searchParams.get("car_status");
      state.byStatus = queryByStatus;

      // Set byKm
      const queryByKm = searchParams.get("car_mileage");
      if (queryByKm) {
        state.byKm = queryByKm.split(",").sort(function (a, b) {
          return a - b;
        });
      } else {
        state.byKm = [];
      }

      // Set byStatus
      const orderByQuery = searchParams.get("order_by");
      state.orderBy = orderByQuery;

      // Set byBodyType
      //  const queryByBodyType = searchParams.get("body_type");
      //  if (queryByBodyType) {
      //    state.byBodyType = queryByBodyType.split(",");
      //  } else {
      //    state.byBodyType = [];
      //  }

      // Set byKm
      // const queryByKm = searchParams.get("car_mileage");
      // if (queryByKm) {
      //   state.byKm = queryByKm.split(",").sort(function (a, b) {
      //     return a - b;
      //   });
      // } else {
      //   state.byKm = [];
      // }

      // Set byTransmission
      // const queryByTransmission = searchParams.get("transmission");
      // if (queryByTransmission) {
      //   state.byTransmission = queryByTransmission.split(",");
      // } else {
      //   state.byTransmission = [];
      // }

      // Set byPage
      // const queryPage = searchParams.get("page");
      // if (queryPage) {
      //   state.byPage = queryPage;
      // } else {
      //   state.byPage = 1;
      // }
    },
    setQueryFilter: (state, action) => {
      const queryTable = action.payload;

      const queryArr = [];
      const valueArr = [];
      //Brand Filter
      if (state.byBrand) {
        queryArr.push("car_brand=" + state.byBrand);
        valueArr.push(
          "car_brand=" + queryTable.car_brand.options[state.byBrand].value
        );
      }

      //Model Filter
      if (state.byModel) {
        queryArr.push("car_model=" + state.byModel);
        valueArr.push(
          "car_model=" +
            queryTable.car_brand.options[state.byBrand].car_model.options[
              state.byModel
            ]
        );
      }

      //Year Manufacture Filter
      if (state.byYearManufacture.length) {
        queryArr.push(
          "manufacturing_date=" + state.byYearManufacture.join(",")
        );
        valueArr.push(
          "manufacturing_date=" + state.byYearManufacture.join(",")
        );
      }

      //City Filter
      if (state.byCity) {
        queryArr.push("city=" + state.byCity);
        valueArr.push("city=" + queryTable.city.options[state.byCity]);
      }

      //Price Filter
      if (state.byPrice.length) {
        queryArr.push("selling_price=" + state.byPrice.join(","));
        valueArr.push("selling_price=" + state.byPrice.join(","));
      }

      //City Filter
      if (state.byStatus) {
        queryArr.push("car_status=" + state.byStatus);
        valueArr.push(
          "car_status=" + queryTable.car_status.options[state.byStatus]
        );
      }

      // byKm Filter
      if (state.byKm.length) {
        queryArr.push("car_mileage=" + state.byKm.join(","));
        valueArr.push("car_mileage=" + state.byKm.join(","));
      }

      // byKm Filter
      if (state.orderBy) {
        queryArr.push("order_by=" + state.orderBy);
        valueArr.push("order_by=" + state.orderBy);
      }

      //Body Type Filter
      // if (state.byBodyType.length) {
      //   queryArr.push("body_type=" + state.byBodyType.join(","));
      // }

      //Price Filter
      // if (state.byPrice.length) {
      //   queryArr.push("price_filter=" + state.byPrice.join(","));
      // }

      //byTransmission Filter
      // if (state.byTransmission.length) {
      //   queryArr.push("transmission=" + state.byTransmission.join(","));
      // }

      //byTransmission Filter
      // if (state.byPage > 1) {
      //   queryArr.push("page=" + state.byPage);
      // }

      if (queryArr.length) {
        state.queryFilter = queryArr.join("&");
        state.valueFilter = valueArr.join("&");
      } else {
        state.queryFilter = "";
        state.valueFilter = "";
      }
    },
    setBrandFilter: (state, action) => {
      state.byBrand = action.payload;
    },
    setModelFilter: (state, action) => {
      state.byModel = action.payload;
    },
    setYearManufactureFilter: (state, action) => {
      state.byYearManufacture = action.payload;
    },
    setCityFilter: (state, action) => {
      state.byCity = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.byPrice = action.payload;
    },
    setStatusFilter: (state, action) => {
      state.byStatus = action.payload;
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },

    setBodyTypeFilter: (state, action) => {
      state.byBodyType = action.payload;
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
      state.byBrand = null;
      state.byModel = null;
      state.byYearManufacture = [];
      state.byCity = null;
      state.byPrice = [];
      state.byStatus = null;
      state.byKm = [];
      state.orderBy = "-posted_at";

      state.byBodyType = [];
      state.byTransmission = [];
      state.byPage = 1;
    },

    removeFilterValue: (state, action) => {
      const { typeOnClose, valueOnClose } = action.payload;

      switch (typeOnClose) {
        case "byBrandModel":
          state.byBrand = null;
          state.byModel = null;
          break;

        case "byYearManufacture":
          state.byYearManufacture = [];
          break;

        case "byCity":
          state.byCity = null;
          break;

        case "byPrice":
          state.byPrice = [];
          break;

        case "byStatus":
          state.byStatus = null;
          break;

        case "byKm":
          state.byKm = [];
          break;

        case "orderBy":
          state.orderBy = "-posted_at";
          break;

        case "byBodyType":
          state.byBodyType.splice(state.byBodyType.indexOf(valueOnClose), 1);
          break;

        default:
          break;
      }
    },
  },
});
