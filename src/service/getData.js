import axios from '../axios'

// export const test = () => axios.get('http://ele.kassing.cn/v1/cities?type=guess')
// 首页类型
export const hometypes =()=>axios.get('http://ele.kassing.cn/v2/index_entry')
// 获取首页打开时页面店铺的列表
export const shopslist =(page)=>axios.get('http://elm.cangdu.org/shopping/restaurants',{params:page})