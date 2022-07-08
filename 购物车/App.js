import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import Recycle from './components/Recycle'
import './App.css'
import axios from 'axios'
export default class App extends Component {
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/todo/goods').then(
      (data) => {
        this.setState({ list: data.data })
      },
      (err) => console.log(err)
    )
  }
  state = {}

  check = (e, id) => {
    const { list } = this.state
    let newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, check: e.target.checked }
      }
      return item
    })
    this.setState({ list: newList })
  }
  changeNum = (id, methods) => {
    const { list } = this.state
    if (methods === '+') {
      let newList = list.map((item) => {
        if (item.id === id) {
          return { ...item, num: item.num + 1 }
        }
        return item
      })
      this.setState({ list: newList })
      return
    }
    let newList = list.map((item) => {
      if (item.id === id && item.num > 1) {
        return { ...item, num: item.num - 1 }
      }
      return item
    })
    this.setState({ list: newList })
  }
  inRecycle = (id) => {
    const { list } = this.state
    let newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, state: true }
      }
      return item
    })
    axios
      .patch('http://127.0.0.1:8000/todo/goods/' + id, { state: true })
      .then((data) => {
        console.log(data)
      })
    this.setState({ list: newList })
  }
  delChecked = () => {
    const { list } = this.state
    let newList = list.map((item) => {
      if (item.check) {
        axios
          .patch('http://127.0.0.1:8000/todo/goods/' + item.id, { state: true })
          .then((data) => {
            console.log(data)
          })
        return { ...item, state: true }
      }
      return { ...item }
    })

    this.setState({ list: newList })
  }
  checkAll = (e) => {
    const { list } = this.state
    let newList = list.map((item) => {
      if (!item.state) {
        return { ...item, check: e.target.checked }
      }
      return item
    })

    this.setState({ list: newList })
  }
  checkEnd = () => {
    const { list } = this.state
    let newList = list.filter((item) => item.check)
    if (!newList) {
      return
    }
    let str = ''
    newList.forEach((item) => {
      str += `商品名称：${item.name},商品价格：${(
        item.price * item.num
      ).toFixed(2)},商品数量：${item.num}`
      str += '\n'
    })
    console.log(str)
  }
  render() {
    const { list } = this.state

    return (
      <div className="app">
        <Header list={list} checkAll={this.checkAll} />
        <List
          list={list}
          check={this.check}
          changeNum={this.changeNum}
          inRecycle={this.inRecycle}
        />
        <Footer
          list={list}
          delChecked={this.delChecked}
          checkAll={this.checkAll}
          checkEnd={this.checkEnd}
        />
        <Recycle list={list} />
      </div>
    )
  }
}
