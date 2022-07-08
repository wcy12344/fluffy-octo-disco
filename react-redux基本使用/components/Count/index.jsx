import { useRef } from "react"

export default function Count(props) {
  console.log(props)
  let select = useRef()
  
  const increment = () => {
    const {value} = select.current
    props.increment(value * 1)
  }

  const decrement = () => {
    const {value} = select.current
    props.decrement(value * 1)
  }
  const incrementOdd = () => {
    const {value} = select.current
    if (props.count % 2 !== 0) {
      props.increment(value * 1)
    }
  }
  const incrementAsync = () => {
    const {value} = select.current
    props.asyncIncrement(value * 1, 500)
  }

  return (
    <div>
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
