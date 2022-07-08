import React, { Component } from 'react'
import './index.scss'
export default class Recycle extends Component {
  render() {
    const { list } = this.props
    return (
      <div className="recycle">
        <div className="top">已经删除的产品 可以重新添加或关注</div>
        <ul>
          {list
            ? list.map((item) => {
                if (item.state) {
                  return (
                    <li key={item.id}>
                      <p>{item.name}</p>
                      <p>￥{item.price}</p>
                      <p>{item.attr}</p>
                      <p>{item.num}</p>
                      <p>
                        <span>重新购买</span> 移入关注
                      </p>
                    </li>
                  )
                }
              })
            : '暂无数据'}
        </ul>
      </div>
    )
  }
}
