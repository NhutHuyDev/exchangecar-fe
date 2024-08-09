import axios from 'axios'

import constaints from '../constaints'
import { showToastError } from 'utils'

const fetchAPI = async (apiEndpoint, method, payload) => {
    // Fetch API
    let callApi = {}
    const apiUrl = constaints.host + apiEndpoint
    let headers = {
        'Content-Type': 'application/json',
    }
    
    if(payload && payload.headers){
        headers = {...headers, ...payload.headers}
    }

    if (method === 'get' || !method) {
        try {
            
            console.log("headers",headers, apiUrl, apiEndpoint);
            callApi = await axios.get(apiUrl, {
                headers: headers
            })

            // console.log(callApi);
            
            return callApi
        } catch (error) {
            console.log("header error",headers, apiUrl, apiEndpoint);
            showToastError({message: error.message})
            return error
        }
    } 
    if (method === 'post' && payload != null) {
        try {
            const data = payload.data
            callApi = await axios.post(apiUrl, data)
            return callApi
        } catch (error) {
            showToastError(error.message)
            return error
        }
    }
    if (method === 'put' && payload != null) {
        try {
            callApi = await axios.put(apiUrl, {...payload})
            return callApi
        } catch (error) {
            showToastError(error.message)
            return error
        }
    }

}

export default fetchAPI