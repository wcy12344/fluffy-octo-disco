import React, { Component, lazy,Suspense } from 'react'
import './App.scss'
import Loading from './pages/Loading'

import { Route, NavLink } from 'react-router-dom'

const Home = lazy(()=>import('./pages/Home.jsx'))
const Detail = lazy(()=>import('./pages/Detail.jsx'))
const About = lazy(()=>import('./pages/About.jsx'))
export default class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loading/>}>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" component={Detail}></Route>
        {/* <Redirect to="/about" /> */}
        </Suspense>
         {/* <Button type="primary" icon={<WechatOutlined/>}>主按钮</Button> */}
        
        <div className="nav">
          <NavLink replace to="/about" children="about" />
          <NavLink replace to="/home" children="home" />
          {/* <Redirect to="/about"/> */}
        </div>
        {/* <WechatOutlined /> */}
      </div>
    )
  }
}
