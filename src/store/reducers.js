import {combineReducers} from 'redux'
import VuelosReducer from './info/reducer'
import AuthReducer from './auth/reducer'

const rootReducer = combineReducers ({
  VuelosReducer,
  AuthReducer
})

export default rootReducer;