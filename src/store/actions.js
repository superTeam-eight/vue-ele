import {login} from '../service/getData'
// import {test} from '../service/getData'
export default {
  // async aTest () {
  //   let a = await test()
  // },
  async log({commit},data) {
    let log = await login(data);
    console.log(log);
    localStorage.setItem('user_id',log.data.user_id);
    localStorage.setItem('username',log.data.username);
    commit('LOGIN_MESSAGE', log);
  }
}