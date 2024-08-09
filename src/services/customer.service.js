import fetchAPI from 'utils/fetchAPI'
import { ADD_WISHLIST, GET_WISHLIST, REMOVE_WISHLIST } from './endpoint'

export const customerService = {
  getWishList: (access_token) => {
    return fetchAPI(GET_WISHLIST, "get" ,{
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  },
  addWishList: ({ post_id, access_token }) => {
    return fetchAPI(ADD_WISHLIST + '/' + post_id, "post",  { headers: { Authorization: `Bearer ${access_token}`}})
  },
  removeWishList: ({ post_id, access_token }) => {
    return fetchAPI(REMOVE_WISHLIST + '/' + post_id, "delete", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  },
}
