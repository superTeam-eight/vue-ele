import {LOGIN_MESSAGE} from './mutation-types'
export default {
  [LOGIN_MESSAGE](state,users){
  state.userinfo = users
  }
}