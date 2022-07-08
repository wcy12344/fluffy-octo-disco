import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Item(props) {
  let [list, setList] = useState([])
  let [isdel, setDel] = useState('')
  useEffect(() => {
    const res = async () => {
      let { data: res } = await axios.get('http://127.0.0.1:8000/todo/addr')
      setList(res)
      props.getLength(res.length)
    }
    res()
  }, [isdel, props])

  const delAddr = (id) => {
    return async () => {
      if (window.confirm('是否删除')) {
        await axios.delete('http://127.0.0.1:8000/todo/addr/' + id)
        setDel([])
      }
    }
  }
  const setDefault = (id) => {
    return () => {
      window.localStorage.setItem('id', id)
      props.changeDefault(id)
    }
  }
  return (
    <div>
      {list.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="item-l">
              <p>
                收货人：{item.consignee}{' '}
                {item.id === props.defaultAddr ? <span className='default'>默认地址</span> : <></>}
              </p>
              <p>手机：{item.tel}</p>
              <p>所在地区：{item.area}</p>
              <p>地址：{item.addr}</p>
            </div>
            <div className="item-r">
              {item.id === props.defaultAddr ? (
                <></>
              ) : (
                <Link to="/home" onClick={setDefault(item.id)}>
                  设置默认
                </Link>
              )}

              <Link to={{ pathname: '/change', state: item }}>修改地址</Link>
              <span onClick={delAddr(item.id)}>删除地址</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
