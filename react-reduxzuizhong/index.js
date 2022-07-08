import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import store,{persistor} from './redux/store';
import {Provider} from "react-redux"
import {PersistGate} from 'redux-persist/lib/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* 此处使用Provider进行包裹的目的 是为了让app所有的后代组件都能接收到store */}
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <App />
  </PersistGate>
    
    </Provider>
  {/* <React.StrictMode> */}
    
  {/* </React.StrictMode> */}
  </BrowserRouter>
);
