import React, { Component } from 'react'
import './index.scss'
export default class Header extends Component {
  render() {
    const { checkAll, list } = this.props
    return (
      <div className="header">
        <header>
          <span>全部商品{list ?list.filter((item) => !item.state).length:0}</span>
          <div>
            配送至
            <select>
              <option value="">河北保定</option>
            </select>
          </div>
        </header>
        <div className="container">
          <label htmlFor="checkall">
            <input
              type="checkbox"
              checked={
                list &&
                list.filter((item) => item.check).length ===
                list.filter((item) => !item.state).length
                  ? true
                  : false
              }
              onChange={(e) => {
                checkAll(e)
              }}
              id="checkall"
            />
            全选
          </label>
          <div>商品</div>
          <div>单价</div>
          <div>数量</div>
          <div>小计</div>
          <div>操作</div>
        </div>
      </div>
    )
  }
}
