import {legacy_createStore,applyMiddleware} from 'redux'
import countReducer from './count_reducer'
import thunk from 'redux-thunk'

export default legacy_createStore(countReducer,applyMiddleware(thunk))