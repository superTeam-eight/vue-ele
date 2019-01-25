import {login} from '../service/getData'
export default {
  async log({commit},data) {
    let log = await login(data);
    if(log.data.message == "验证码不正确"){
        commit('LOGIN_MESSAGE', log);
    }else{
      localStorage.setItem('user_id',log.data.user_id);
      localStorage.setItem('username',log.data.username);
      commit('LOGIN_MESSAGE', log);
    }
  }
}