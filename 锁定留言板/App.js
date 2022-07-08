import React, { Component } from 'react'

import './App.scss'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityList: ['北京', '保定', '曹县', '上海', '广州'],
      city: '',
      sex: '男',
      name: '',
      age: '',
      flag: 0,
      list: JSON.parse(localStorage.getItem('list')) || [
        { name: '张三', age: 19, sex: '男', city: '上海', checked: false },
        { name: '谢欣欣', age: 29, sex: '女', city: '曹县', checked: false }
      ],
      disabled: false, //启用或者禁用状态
      count: 4 //倒计时的秒数
    }
  }
  //设置表单的数据内容
  setValue = (e, key) => {
    console.log(e.target.value, key)
    this.setState({
      [key]: e.target.value
    })
  }

  add = () => {
    let { list, city, sex, name, age } = this.state
    console.log(city, sex, name, age)
    let obj = {
      city: city,
      sex: sex,
      name: name,
      age: age,
      checked: false
    }

    list.push(obj)

    localStorage.setItem('list', JSON.stringify(list))

    this.setState({
      list: list
    })
  }

  //排序的方法值
  changeSort = () => {
    let { list, flag } = this.state
    //升降序的排列
    if (flag === 1) {
      flag = 2
    } else {
      flag = 1
    }
    //flag不等于进行排序
    if (flag !== 0) {
      list.sort((a, b) => {
        return flag === 1 ? a.age - b.age : b.age - a.age
      })
    }

    this.setState({
      flag: flag
    })
  }

  //修改锁定的状态的方法
  changeState = () => {
    let { disabled, count } = this.state

    let timer = setInterval(() => {
      //倒计时结束的，按钮切换
      if (count <= 0) {
        clearInterval(timer)
        this.setState({
          disabled: !disabled,
          count: 4
        })
        return false
      }

      count--
      this.setState({
        count: count
      })
    }, 1000)
  }

  //第一次渲染和每次完成更新前都会触发
  render() {
    let { list, cityList, city, sex, name, age, flag, disabled, count } =
      this.state

    //控制升序或者降序的箭头按钮
    let cls = null
    if (flag == 2) {
      cls = 'sort down'
    } else {
      cls = 'sort'
    }
    return (
      <div className="cart">
        <p>
          <button onClick={this.changeState}>
            {' '}
            {count >= 4 ? '' : count + '秒'}
            {disabled ? '解锁' : '锁定'}
          </button>
        </p>

        <div className="form">
          <p>
            <label>所在城市</label>
            <select onChange={(e) => this.setValue(e, 'city')}>
              <option value="">选择城市</option>
              {cityList.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                )
              })}
            </select>
          </p>
          <p>
            <label>性别:</label>
            <input
              type="radio"
              name="sex"
              value="男"
              onChange={(e) => this.setValue(e, 'sex')}
            />{' '}
            男
            <input
              type="radio"
              name="sex"
              value="女"
              onChange={(e) => this.setValue(e, 'sex')}
            />{' '}
            女
            <input
              type="radio"
              name="sex"
              value="未知"
              onChange={(e) => this.setValue(e, 'sex')}
            />{' '}
            未知
          </p>
          <p>
            <label>姓名</label>
            <input
              type="text"
              value={name}
              onChange={(e) => this.setValue(e, 'name')}
            />
          </p>
          <p>
            <label>年龄</label>
            <input
              type="number"
              value={age}
              onChange={(e) => this.setValue(e, 'age')}
            />
          </p>
          <p>
            <button onClick={this.add} disabled={disabled}>
              提交
            </button>
          </p>
        </div>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Id</th>
              <th>姓名</th>
              <th>
                年龄
                <div className={cls} onClick={this.changeSort}>
                  ^
                </div>
              </th>
              <th>性别</th>
              <th>城市</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.sex}</td>
                  <td>{item.city}</td>
                  <td>
                    <button disabled={disabled}>删除</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
