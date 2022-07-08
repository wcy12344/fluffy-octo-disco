import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'
const AllReducer = combineReducers({
    count: countReducer,
    person:personReducer
})
export default legacy_createStore(AllReducer,applyMiddleware(thunk))