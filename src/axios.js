import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : ''

export default axios