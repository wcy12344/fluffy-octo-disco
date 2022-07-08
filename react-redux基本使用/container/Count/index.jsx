import countUI from '../../components/Count'

// 引入 connect 链接ui组件 和 redux
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_actions'

export default connect(
  (state) => ({ count: state }),
  // dispatch 一般写法
  // (dispatch) => ({
  //   increment: (number) => dispatch(createIncrementAction(number)),
  //   decrement: (number) => dispatch(createDecrementAction(number)),
  //   asyncIncrement: (number, time) =>
  //     dispatch(createIncrementAsyncAction(number, time))
  // })
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    asyncIncrement: createIncrementAsyncAction
  }
)(countUI)
