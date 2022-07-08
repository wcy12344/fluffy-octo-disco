/*
 * 该文件用于汇总所有的reducer成为一个总的reducer
 */
import { combineReducers } from 'redux'
// 引入count的reducer
import count from './count'
// 引入person的reducer
import person from './person'

export default combineReducers({
  count,
  person
})
