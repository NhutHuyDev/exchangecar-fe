const APP = '/api/v1'

const AUTH_SERVICE = 'auth'
const CAR_SERVICE = 'cars'
const POST_SERVICE = 'posts'
const CUSTOMER_SERVICE = 'customers'

// auth
export const LOGIN = `${APP}/${AUTH_SERVICE}/sign-in`
export const UPDATE_PASSWORD = `${APP}/${AUTH_SERVICE}/change-password`
export const REQUEST_OTP =  `${APP}/${AUTH_SERVICE}/request-otp/sign-up`
export const SIGNUP =  `${APP}/${AUTH_SERVICE}/sign-up`
export const CHANGE_PASSWORD =  `${APP}/${AUTH_SERVICE}/change-password`
export const RESET_PASSWORD =  `${APP}/${AUTH_SERVICE}/reset-password`
export const REQUEST_OTP_RESET_PASSWORD =  `${APP}/${AUTH_SERVICE}/request-otp/reset-password`

// customers
export const UPDATE_PROFILE = `${APP}/${CUSTOMER_SERVICE}/me`
export const GET_PROFILE = `${APP}/customers/me`
export const GET_WISHLIST = `${APP}/${CUSTOMER_SERVICE}/wishlist`
export const ADD_WISHLIST = `${APP}/${CUSTOMER_SERVICE}/wishlist`
export const REMOVE_WISHLIST = `${APP}/${CUSTOMER_SERVICE}/wishlist`