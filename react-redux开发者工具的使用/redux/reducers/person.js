import { ADD_PERSON } from '../constant'
// 初始化人的列表
let initState = [{ id: 1, name: 'tom', age: 18 }]
export default function personReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON: // 若添加一个人
      return [...preState, data]

    default:
      return preState
  }
}
