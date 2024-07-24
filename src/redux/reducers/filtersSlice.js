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
    orderBy: null,
    byBodyType: null,
    byKm: [],
    byOrigin: null,
    byEngineType: null,
    byTransmission: null,
    byDriveTrain: null,
    byOutColor: null,
    byTotalSeating: null,
    byTotalDoors: null,
    byPage: 1,
    bySearch: "",
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

      // Set OrderBy
      const orderByQuery = searchParams.get("order_by");
      state.orderBy = orderByQuery;

      // Set byBodyType
      const queryByBodyType = searchParams.get("body_type");
      state.byBodyType = queryByBodyType;

      // Set byOrigin
      const queryByOrigin = searchParams.get("car_origin");
      state.byOrigin = queryByOrigin;

      // Set byOrigin
      const queryByEngineType = searchParams.get("engine_type");
      state.byEngineType = queryByEngineType;

      // Set byTransmission
      const queryByTransmission = searchParams.get("transmission");
      state.byTransmission = queryByTransmission;

      // Set byDrivetrain
      const queryByDrivetrain = searchParams.get("drivetrain");
      state.byDriveTrain = queryByDrivetrain;

      // Set byOutColor
      const queryByOutColor = searchParams.get("out_color");
      state.byOutColor = queryByOutColor;

      // Set byOutColor
      const queryByTotalSeating = searchParams.get("total_seating");
      state.byTotalSeating = queryByTotalSeating;

      // Set byOutColor
      const queryByTotalDoors = searchParams.get("total_doors");
      state.byTotalDoors = queryByTotalDoors;

      // Set byPage
      const queryPage = searchParams.get("page");
      if (queryPage) {
        state.byPage = queryPage;
      } else {
        state.byPage = 1;
      }

      // Set bySearch
      const queryBySearch = searchParams.get("search");
      if (queryBySearch && queryBySearch !== "") {
        state.bySearch = queryBySearch;
      } else {
        state.bySearch = '';
      }
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
      if (state.byBodyType) {
        queryArr.push("body_type=" + state.byBodyType);
        valueArr.push(
          "body_type=" + queryTable.body_type.options[state.byBodyType].value
        );
      }

      //Car Origin Filter
      if (state.byOrigin) {
        queryArr.push("car_origin=" + state.byOrigin);
        valueArr.push(
          "car_origin=" + queryTable.car_origin.options[state.byOrigin]
        );
      }

      //Car Origin Filter
      if (state.byEngineType) {
        queryArr.push("engine_type=" + state.byEngineType);
        valueArr.push(
          "engine_type=" + queryTable.engine_type.options[state.byEngineType]
        );
      }

      //byTransmission Filter
      if (state.byTransmission) {
        queryArr.push("transmission=" + state.byTransmission);
        valueArr.push(
          "transmission=" +
            queryTable.transmission.options[state.byTransmission]
        );
      }

      //byDriveTrain Filter
      if (state.byDriveTrain) {
        queryArr.push("drivetrain=" + state.byDriveTrain);
        valueArr.push(
          "drivetrain=" + queryTable.drivetrain.options[state.byDriveTrain]
        );
      }

      //byOutColor Filter
      if (state.byOutColor) {
        queryArr.push("out_color=" + state.byOutColor);
        valueArr.push(
          "out_color=" + queryTable.out_color.options[state.byOutColor].value
        );
      }

      //byTotalSeating Filter
      if (state.byTotalSeating) {
        queryArr.push("total_seating=" + state.byTotalSeating);
        valueArr.push("total_seating=" + state.byTotalSeating);
      }

      //byTotalDoors Filter
      if (state.byTotalDoors) {
        queryArr.push("total_doors=" + state.byTotalDoors);
        valueArr.push("total_doors=" + state.byTotalDoors);
      }

      //byPage Filter
      if (state.byPage > 1) {
        queryArr.push("page=" + state.byPage);
        valueArr.push("page=" + state.byPage);
      }

      //bySearch Filter
      if (state.bySearch && state.bySearch !== "") {
        queryArr.push("search=" + state.bySearch);
        valueArr.push("search=" + state.bySearch);
      }

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
    setOriginFilter: (state, action) => {
      state.byOrigin = action.payload;
    },
    setEngineTypeFilter: (state, action) => {
      state.byEngineType = action.payload;
    },
    setTransmissionFilter: (state, action) => {
      state.byTransmission = action.payload;
    },
    setDrivetrainFilter: (state, action) => {
      state.byDriveTrain = action.payload;
    },
    setOutColorFilter: (state, action) => {
      state.byOutColor = action.payload;
    },
    setTotalSeating: (state, action) => {
      state.byTotalSeating = action.payload;
    },
    setTotalDoors: (state, action) => {
      state.byTotalDoors = action.payload;
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
      state.orderBy = null;
      state.byBodyType = null;
      state.byOrigin = null;
      state.byEngineType = null;
      state.byTransmission = null;
      state.byDriveTrain = null;
      state.byOutColor = null;
      state.byTotalSeating = null;
      state.byTotalDoors = null;
      state.bySearch = "";
      state.byPage = 1;
    },

    removeFilterValue: (state, action) => {
      const { typeOnClose } = action.payload;

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
          state.orderBy = null;
          break;

        case "byBodyType":
          state.byBodyType = null;
          break;

        case "byOrigin":
          state.byOrigin = null;
          break;

        case "byEngineType":
          state.byEngineType = null;
          break;

        case "byTransmission":
          state.byTransmission = null;
          break;

        case "byDrivetrain":
          state.byDriveTrain = null;
          break;

        case "byOutColor":
          state.byOutColor = null;
          break;

        case "byTotalSeating":
          state.byTotalSeating = null;
          break;

        case "byTotalDoors":
          state.byTotalDoors = null;
          break;

        default:
          break;
      }
    },
  },
});
