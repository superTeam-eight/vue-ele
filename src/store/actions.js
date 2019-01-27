// import { GETLOCATION } from "./mutation-types";

// export default {

//   async getlocation(){
//     // let getlocation=

import {login} from '../service/getData'
export default {

  async log({commit},data) {
    let log = await login(data);
    console.log(log);
    localStorage.setItem('user_id',log.data.user_id);
    localStorage.setItem('username',log.data.username);
    commit('LOGIN_MESSAGE', log);
  }
 
}