import axios from '../axios'

// export const test = () => axios.get('http://ele.kassing.cn/v1/cities?type=guess')
// 首页类型
export const hometypes =()=>axios.get('http://ele.kassing.cn/v2/index_entry')