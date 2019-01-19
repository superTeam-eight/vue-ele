import axios from '../axios'

export const test = () => axios.get('http://ele.kassing.cn/v1/cities?type=guess')
