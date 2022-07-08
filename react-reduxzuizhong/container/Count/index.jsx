// 引入 connect 链接ui组件 和 redux
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'

import { useRef } from 'react'

function Count(props) {
  console.log(props)
  let select = useRef()

  const increment = () => {
    const { value } = select.current
    props.increment(value * 1)
  }

  const decrement = () => {
    const { value } = select.current
    props.decrement(value * 1)
  }
  const incrementOdd = () => {
    const { value } = select.current
    if (props.count % 2 !== 0) {
      props.increment(value * 1)
    }
  }
  const incrementAsync = () => {
    const { value } = select.current
    props.incrementAsync(value * 1, 500)
  }

  return (
    <div>
      <h2>我是count组件,下方组件的人数为{props.peopleCount}</h2>
      <p>{props.count}</p>
      <select ref={select}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={decrement}>减</button>
      <button onClick={increment}>加</button>
      <button onClick={incrementOdd}>奇数加</button>
      <button onClick={incrementAsync}>异步加</button>
    </div>
  )
}

export default connect(
  (state) => ({ count: state.count, peopleCount: state.person.length }),
  // dispatch 一般写法
  // (dispatch) => ({
  //   increment: (number) => dispatch(createIncrementAction(number)),
  //   decrement: (number) => dispatch(createDecrementAction(number)),
  //   asyncIncrement: (number, time) =>
  //     dispatch(createIncrementAsyncAction(number, time))
  // })
  {
    increment,
    decrement,
    incrementAsync
  }
)(Count)
