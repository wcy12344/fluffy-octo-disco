import { nanoid } from 'nanoid'
import { useRef } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'
function Person(props) {
  let nameRef = useRef()
  let ageRef = useRef()
  const addPerson = () => {
    let name = nameRef.current.value
    let age = +ageRef.current.value
    const personObj = { id: nanoid(), name, age }
    props.addPerson(personObj)
    nameRef.current.value = ''
    ageRef.current.value = ''
  }
  return (
    <div>
      <h2>我是Person组件,上方组件的值为{props.count}</h2>
      <input ref={nameRef} type="text" placeholder="输入名字" />
      <input ref={ageRef} type="text" placeholder="输入年龄" />
      <button onClick={addPerson}>添加</button>
      <ul>
        {props.person.map((item) => {
          return (
            <li key={item.id}>
              名字：{item.name} 年龄：{item.age}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default connect(
  (state) => ({ person: state.person, count: state.count }),
  {
    addPerson
  }
)(Person)
