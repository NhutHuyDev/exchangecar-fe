import axios from 'axios'

const setAPIKey = (apiKey) => {
    axios.defaults.headers.common['x-api-key'] = `${apiKey}`
}

export default setAPIKey