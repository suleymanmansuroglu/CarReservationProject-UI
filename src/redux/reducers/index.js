import {combineReducers} from 'redux'
import { CarReducers } from './CarReducers'

const reducers = combineReducers({
    Car : CarReducers,

})

export default reducers