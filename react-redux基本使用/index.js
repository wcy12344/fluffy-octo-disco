import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </BrowserRouter>
);
// 检测redux中状态的改变 若redux状态发生了改变 那么重新渲染app组件
store.subscribe(()=>{
  root.render(
    <BrowserRouter>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
    </BrowserRouter>
  );
})
