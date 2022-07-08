import axios from 'axios'
import React, { Component } from 'react'
import './about.scss'
export default class About extends Component {
  getCity = async () => {
    const { data } = await axios.get(
      'http://elm.cangdu.org/v1/cities?type=group'
    )
    const { data:res } = await axios.get(
      'http://elm.cangdu.org/v1/cities?type=guess'
    )
    const { data:res1 } = await axios.get(
      'http://elm.cangdu.org/v1/cities?type=hot'
    )
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    let city = []
    alpha.forEach((i) => {
      data[i] ? city.push({ [i]: data[i] }) : city.push({ [i]: [{name:""}] })
    })
    this.setState({ list: city,nowCity:res,hotCity:res1 })
  }
  state = {
    list: [],
    nowCity:{},
    hotCity:[]
  }
  componentDidMount() {
    this.getCity()
  }
  render() {
    let { list,nowCity,hotCity } = this.state
    return (
      <div className='about'>
        <div style={{height:"50px"}}>
        <div className="top">
          <div className='logo'>ele.com</div>
          <div className='login'>登录|注册</div>
        </div>
        </div>
        <div className="city">
          <div><span className='now'>当前定位城市</span> <span className='font'>定位不准确时， 请在城市列表中选择</span></div>
          <div className='select'><span>{nowCity["name"]}</span> <span>&gt;</span></div>
        </div>
        <div className="hotcity">
          <h5>热门城市</h5>
          <ul>
            {
              hotCity.map(i=>{
                return <li>{i['name']}</li>
              })
            }
          </ul>
        </div>
        {list.map((i, index) => {
          let [key] = Object.keys(i)
          return (
            <div key={index}>
              <div>{key}</div>
              <div className='group'>
                {i[key].map((item, index1) => {
                  console.log(item['name']);
                  return (
                    <span
                      className='item'
                      key={index1}
                      dangerouslySetInnerHTML={{
                        __html: item['name']!=="" ? item['name'] : '暂无数据'
                      }}
                    ></span>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
