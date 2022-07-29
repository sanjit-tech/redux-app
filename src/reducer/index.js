import changeNumber from './incrementDecrements'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    changeNumber,
})
export default rootReducer