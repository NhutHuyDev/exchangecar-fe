import fetchAPI from "utils/fetchAPI"
import { GET_PROFILE, LOGIN, REQUEST_OTP, REQUEST_OTP_RESET_PASSWORD, RESET_PASSWORD, SIGNUP } from "./endpoint"


export const authService = {
    signIn: ({mobile_phone, password}) => {
        return fetchAPI(LOGIN, "post", {data: {mobile_phone: "+84" + mobile_phone, password}} )
    },
    getProfile: ({access_token}) => {
        return fetchAPI(GET_PROFILE, "get" , {headers: {Authorization: `Bearer ${access_token}`}})
    },
    requestOTPSignUp: ({mobile_phone}) => {
        return fetchAPI(REQUEST_OTP, "post", {data: {mobile_phone: "+84" + mobile_phone}})
    },
    signUp: (data) => {
        return fetchAPI(SIGNUP, "post", {data: data})
    },
    requestOtpResetPassword: ({mobile_phone}) => {
        return fetchAPI(REQUEST_OTP_RESET_PASSWORD, "post", {data: {mobile_phone: "+84" + mobile_phone}})
    },
    resetPassWord: (data) => {
        return fetchAPI(RESET_PASSWORD, "post", {data: data})
    }
}