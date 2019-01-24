import axios from '../axios'

export const test = () => axios.get('http://ele.kassing.cn/v1/cities?type=guess')

export const getShopDetail = (id) => axios.get('https://elm.cangdu.org/shopping/restaurant/' + id)

export const getShopFoods = (id) => axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id=' + id)
