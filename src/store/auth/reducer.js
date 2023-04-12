import {
  GET_USER,
  GET_USER_OK,
  GET_USER_FAIL
}from './actionType'

const initialState = {
  user: {},
  loadingUser: false,
  error: {
    message: ''
  }
}

export default function AuthReducer(state = initialState, action){
  switch(action.type){
    case GET_USER:
      state = {...state, loadingUser: true}
      break

    case GET_USER_OK:
      state = {...state, loadingUser: false, user: action.payload}
      break


    case GET_USER_FAIL:
      state = {...state, loadingUser: false, user:{}, error:{message: action.payload}}
      break

    default:
      break
  }
  return state;
}