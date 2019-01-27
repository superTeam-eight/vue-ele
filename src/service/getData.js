import axios from '../axios'

// export const test = () => axios.get('http://ele.kassing.cn/v1/cities?type=guess')


export const server = () => axios.get('http://elm.cangdu.org/v3/profile/explain')
export const userInfo = (id) => axios.get('http://elm.cangdu.org/v1/user', {
    params: {
        user_id: id
    }
})