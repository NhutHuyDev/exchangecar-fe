import axios from 'axios'

import constaints from '../constaints'

const fetchAPI = async (apiEndpoint, method, payload) => {
    // Fetch API
    const apiUrl = constaints.host + apiEndpoint

    let callApi = {}

    if (method === 'get' || !method) {
        try {
            callApi = axios.get(apiUrl)
            return callApi
        } catch (error) {
            return error
        }
    } 
    if (method === 'post' && payload != null) {
        try {
            callApi = axios.post(apiUrl, {...payload})
            return callApi
        } catch (error) {
            return error
        }
    }
    if (method === 'put' && payload != null) {
        try {
            callApi = axios.put(apiUrl, {...payload})
            return callApi
        } catch (error) {
            return error
        }
    }

}

export default fetchAPI