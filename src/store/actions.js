import {test} from '../service/getData'
export default {
  async aTest () {
    console.log(111)
    let a = await test()
    console.log(a)
  }
}