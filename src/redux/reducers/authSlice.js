import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "services/auth.service";
import { saveAccessToken, showToastError } from "utils";

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
      state.currentUser = action.payload;
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
      state.currentUser = action.payload;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.currentUser = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.currentUser = action.payload;
    })
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
  })
  },
});

export default authSlice;

export const signIn = createAsyncThunk(
  "/auth/login",
  async ({mobile_phone, password}, { rejectWithValue }) => {
    try {

      const resTokens = await authService.signIn({mobile_phone: mobile_phone, password: password})

      const resProfile = await authService.getProfile({access_token: resTokens.data.access_token})

      const allResults = await Promise.all([resTokens, resProfile])

      saveAccessToken(allResults[0].data.access_token)

      return allResults[1].data.data.currentUser;
      
    } catch (error) {
      showToastError({message: "Login failed! Check your phone and password."})
      rejectWithValue(error)
    }
  }
);

export const getProfile = createAsyncThunk(
  "/auth/setCurrentUser",
  async ({access_token}, { rejectWithValue }) => {
    try {

      const resProfile = await authService.getProfile({access_token: access_token})

      return resProfile.data.data.currentUser;
      
    } catch (error) {
      rejectWithValue(error)
    }
  }
);
