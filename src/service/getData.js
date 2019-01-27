import axios from '../axios'

// export const test = () => axios.get('http://ele.kassing.cn/v1/cities?type=guess')
// 首页类型
export const hometypes =()=>axios.get('http://ele.kassing.cn/v2/index_entry')
// 获取首页打开时页面店铺的列表
export const shopslist =(page)=>axios.get('http://elm.cangdu.org/shopping/restaurants',{params:page})
// 主页搜所商品接口
export const  aSousuo=(menu)=>axios.get('http://elm.cangdu.org/v4/restaurants',{params:menu})


export const server = () => axios.get('http://elm.cangdu.org/v3/profile/explain')
export const test = () => axios.get('http://ele.kassing.cn/v1/cities?type=guess')

// 验证码
export const verificationCode = () => axios.post('http://ele.kassing.cn/v1/captchas')
// 登录请求
export const login = ({username, password, captcha_code}) => axios.post('http://ele.kassing.cn/v2/login',{
    username, password, captcha_code
})
// 地址请求
export const guess = () => axios.get('http://ele.kassing.cn/v1/cities?type=guess')
export const hot = () => axios.get('http://ele.kassing.cn/v1/cities?type=hot')
export const group = () => axios.get('http://ele.kassing.cn/v1/cities?type=group')
// 地址搜索 {params:1}
export const getdemand = (data) => axios.get('http://ele.kassing.cn/v1/pois',{params:data})
