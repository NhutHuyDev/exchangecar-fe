import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    otpVerification: {
      phone_number: "",
      token: "",
      status: "",
    },
    currentUser: {},
  },
  reducers: {
    setInitial: (state, action) => {
      state.isAuthenticated = false;
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.currentUser = {
        phone_number: action.payload.phone_number,
        fullname: "Nguyễn Văn An",
      };
    },
    requestOTP: (state, action) => {
      state.otpVerification = {
        phone_number: action.payload.phone_number,
        token: "",
        status: "waiting",
      };
    },
    verifyToken: (state, action) => {
      state.otpVerification = {
        phone_number: action.payload.phone_number,
        token: action.payload.token,
        status: "true",
      };
      // createAccount
      state.isAuthenticated = true;
      state.currentUser = {
        phone_number: action.payload.phone_number,
        fullname: action.payload.fullname,
      };
    },
    setCurrentUser: (state, action) => {
      state.isAuthenticated = true;
      state.currentUser = {
        phone_number: action.payload.phone_number,
        fullname: action.payload.fullname,
      };
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.currentUser = {};
    },
  },
});

export default authSlice;
