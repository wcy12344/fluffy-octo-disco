// import { useState, memo, useEffect, useCallback } from 'react'
import store from './redux/store'
import Count from './container/Count'
export default function App() {


  return (
    <div>
      {/* 给容器组件传递store */}
      <Count store={store} />

    </div>
  )
}
