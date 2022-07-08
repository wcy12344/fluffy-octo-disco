import {INCREMENT,DECREMENT} from './constant'

let initReducer = 0
export default function countReducer(preState = initReducer,action){
    const {type,data} = action
    switch (type) {
        case INCREMENT:
            return preState+data
        case DECREMENT:
            return preState-data
        default:
            return preState
    }
}