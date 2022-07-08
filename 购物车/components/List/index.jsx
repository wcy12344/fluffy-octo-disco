import React, { Component } from 'react'
import './index.scss'
export default class List extends Component {
  render() {
    const { list, check, changeNum, inRecycle } = this.props
    console.log(list)
    return (
      <div className="list">
        {list
          ? list.map((item) => {
              if (!item.state) {
                return (
                  <div key={item.id} className="warp">
                    <div className="head">
                      <label htmlFor="checkall" >
                        <input type="checkbox" checked={item.check?true:false} onChange={
                          (e) => {
                            check(e, item.id)
                          }
                        } id="checkall" />
                        {item.shop}
                      </label>
                    </div>
                    <div className="container">
                      <input
                        type="checkbox"
                        checked={item.check}
                        onChange={(e) => {
                          check(e, item.id)
                        }}
                      />

                      <div className="info">
                        <img alt="暂无" />
                        {item.name}
                        <span className="attr">128G白色</span>
                      </div>
                      <div>￥{item.price}</div>
                      <div className="num">
                        <button
                          onClick={() => {
                            changeNum(item.id, '+')
                          }}
                        >
                          +
                        </button>
                        {item.num}
                        <button
                          onClick={() => {
                            changeNum(item.id, '-')
                          }}
                        >
                          -
                        </button>
                      </div>
                      <div>￥{(item.price * item.num).toFixed(2)}</div>
                      <div className="handle">
                        <span
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            inRecycle(item.id)
                          }}
                        >
                          删除
                        </span>{' '}
                        <br />
                        <br /> 移入关注
                      </div>
                    </div>
                  </div>
                )
              }
            })
          : '暂无数据'}
      </div>
    )
  }
}
