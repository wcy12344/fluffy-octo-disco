import React, { useContext } from 'react'
import {xxx} from '../App'
export default function Son(props) {

  return (
    <div>
        <Ez />
    </div>
  )
}


function Ez() {
 let info = useContext(xxx)
 console.log(info);
  return (
    <div>Son</div>
  )
}
