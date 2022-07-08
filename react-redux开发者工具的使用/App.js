// import { useState, memo, useEffect, useCallback } from 'react'
import store from './redux/store'
import Count from './container/Count'
import Person from './container/Person'
export default function App() {


  return (
    <div>

      <Count/>
      <hr />
      <Person />
    </div>
  )
}
