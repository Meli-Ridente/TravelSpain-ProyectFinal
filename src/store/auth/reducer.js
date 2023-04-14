import {
  GET_USER,
  GET_USER_OK,
  GET_USER_FAIL,
  SET_USER_LOGIN,
  SET_FAVORITE,
  SET_FAVORITE_OK,
  SET_FAVORITE_FAIL,
  ADD_USER,
  ADD_USER_OK,
  ADD_USER_FAIL
}from './actionType'

const initialState = {
  user: {},
  favorite: {},
  loadingFavorite: false,
  userLogin: undefined,
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

    case SET_USER_LOGIN:
      state = {...state, loadingUser: false, userLogin: action.payload}
      break

    case SET_FAVORITE:
      state = {...state, loadingFavorite: true}
      break

    case SET_FAVORITE_OK:
      state = {...state, loadingFavorite: false, userLogin: action.payload}
      break

    case SET_FAVORITE_FAIL:
      state = {...state, loadingFavorite: false, error:{message: action.payload}}
      break
      
    case ADD_USER:
      state = {...state, loadingUser: true}
      break

    case ADD_USER_OK: 
      state = {...state, loadingUser: false, user: action.payload}
      break

    case ADD_USER_FAIL:
      state= {...state, loadingUser: false, error:{message: action.payload}}
      break
    
    default:
      break
  }
  return state;
}