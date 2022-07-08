// 引入核心的legacy_createStore 创建store对象  引入applyMiddleware注册中间件 引入combineReducers来共享多个reducer
import { legacy_createStore, applyMiddleware } from 'redux'

// 引入thunk 用来支持异步action
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
// 汇总所有的reducer 变为一个总的reducer
import reducer from './reducers'
// 暴露store



import {persistStore, persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
 const storageConfig = {
        key: 'root', // 必须有的
        storage:storageSession, // 缓存机制
        // blacklist: ['name','age'] // reducer 里不持久化的数据,除此外均为持久化数据
}
const myPersistReducer = persistReducer(storageConfig, reducer);

const store = legacy_createStore(
  myPersistReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
export const persistor = persistStore(store)
export default store