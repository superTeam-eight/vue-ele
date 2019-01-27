import axios from 'axios'

// axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://ele.kassing.cn'

axios.defaults.withCredentials=true;
export default axios