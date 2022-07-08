import React, { Component } from 'react'
import './index.scss'
export default class Footer extends Component {
  render() {
    const { list, delChecked, checkAll, checkEnd } = this.props
    const price = list ? list.filter((item) => item.check) : 0
    const money =
      price !== 0
        ? price.reduce((pre, next) => {
            return pre + parseFloat(next.price * next.num)
          }, 0)
        : 0
    return (
      <div className="footer">
        <div className="left">
          <input
            type="checkbox"
            checked={price!==0 && price.length===list.filter(item=>!item.state).length ?true:false}
            onChange={(e) => {
              checkAll(e)
            }}
          />
          全选
          <span style={{ cursor: 'pointer' }} onClick={delChecked}>
            删除选中的商品
          </span>
          <span>移入关注</span>
          <span className="num">清理购物车</span>
        </div>
        <div className="right">
          已选择<span className="num">{price.length}</span>件商品 总价
          <span className="num">￥{money.toFixed(2)}</span>
          <button className="end" onClick={checkEnd}>
            去结算
          </button>
        </div>
      </div>
    )
  }
}
