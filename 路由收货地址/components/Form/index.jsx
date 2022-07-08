import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Form(props) {
  let [obj, setobj] = useState({
    consignee: '',
    tel: '',
    area: '',
    addr: ''
  })
  useEffect(() => {
    if (props.location.state?.id) {
      setobj(props.location.state)
    }
  }, [props])
  const addForm = async () => {
    let consignee = /^[\u4e00-\u9fa5]{2,4}$/.test(obj.consignee)
    let tel = /^(13|18|15|17|19)+\d{9}$/.test(obj.tel)
    console.log(tel)
    if (consignee && tel && obj.area !== '' && obj.addr !== '') {
      await axios.post('http://127.0.0.1:8000/todo/addr', obj)
      window.alert('添加成功')
      props.history.replace('/home')
      return
    }
    window.alert('格式不正确')
  }
  const changeObj = (e, key) => {
    setobj({ ...obj, [key]: e.target.value })
  }
  const changeForm = async () => {
    let consignee = /^[\u4e00-\u9fa5]{2,4}$/.test(obj.consignee)
    let tel = /^(13|18|15|17|19)+\d{9}$/.test(obj.tel)
    if (consignee && tel && obj.area !== '' && obj.addr !== '') {
      await axios.patch('http://127.0.0.1:8000/todo/addr/' + obj.id, obj)
      window.alert('修改成功')
      props.history.replace('/home')
      return
    }
    window.alert('格式不正确')
  }
  
  return (
    <div className="form">
      <Link to="/home">返回收货列表</Link>
      <p>
        <label htmlFor="">
          收货人：
          <input
            value={obj.consignee}
            onChange={(e) => {
              changeObj(e, 'consignee')
            }}
            type="text"
          />
        </label>
      </p>
      <p>
        <label htmlFor="">
          手机：
          <input
            value={obj.tel}
            onChange={(e) => {
              changeObj(e, 'tel')
            }}
            type="text"
          />
        </label>
      </p>
      <p>
        {' '}
        <label htmlFor="">
          所在地区：
          <input
            value={obj.area}
            onChange={(e) => {
              changeObj(e, 'area')
            }}
            type="text"
          />
        </label>
      </p>
      <p>
        <label htmlFor="">
          地址：
          <input
            value={obj.addr}
            onChange={(e) => {
              changeObj(e, 'addr')
            }}
            type="text"
          />
        </label>
      </p>
      {obj?.id ? (
        <button onClick={changeForm}>修改收货地址</button>
      ) : (
        <button onClick={addForm}>保存收货地址</button>
      )}
    </div>
  )
}
