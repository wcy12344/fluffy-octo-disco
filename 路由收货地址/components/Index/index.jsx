import React, { useState } from 'react'
import Header from '../Header'
import Item from '../Item'
export default function Index() {
    let [num,setNum] = useState(0)
    let [defaultAddr,setDefaultAddr] = useState(Number(window.localStorage.getItem("id"))||1)
    let getLength = (length)=>{
        setNum(length)
    }
    let changeDefault = (id)=>{
        setDefaultAddr(id)
    }
  return (
    <div>
        <Header num={num}/>
        <Item getLength={getLength} defaultAddr={defaultAddr} changeDefault={changeDefault} />
    </div>
  )
}
