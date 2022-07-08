import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default function Header(props) {
  return (
    <div className='header'>
        <Link to='/add'>新增收货地址</Link>
        <p>你已经创建了{props.num}个收货地址</p>
    </div>
  )
}
