import performAction from './grocery_reducer'
import shopping from './shoppingbag_reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    performAction,
    shopping
})

export default rootReducer