import { legacy_createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'
export default legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
