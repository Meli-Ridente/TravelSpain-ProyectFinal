import axios from 'axios'

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

export function actionGetUser(userData){
  return{
    type: GET_USER,
    payload: userData
  }
}

export function actionGetUserOk(user){
  return{
    type: GET_USER_OK,
    payload: user
  }
}

export function actionGetUserFail(error){
  return{
    type: GET_USER_FAIL,
    payload: error
  }
}

export function actionUserLogin(userLogin){
  return{
    type: SET_USER_LOGIN,
    payload: userLogin
  }
}

export function setUserLogin(userLogin){
  return async (dispatch) => {
    dispatch(actionUserLogin(userLogin))
  }
}

export function getUser(user){
  return async (dispatch) => {
    dispatch(actionGetUser(user))
      try{
        const response = await axios.get('http://localhost:8765/users')
        dispatch(actionGetUserOk(response.data))
      }catch(error){
        dispatch(actionGetUserFail(error))
    }
  }
}

      // FAVORITES

export function actionSetFavorite(){
  return {
    type: SET_FAVORITE
  }
}

export function actionSetFavoriteOk(userLogin){
  return{
    type: SET_FAVORITE_OK,
    payload: userLogin
  }
}

export function actionSetFavoriteFail(error){
  return{
    type: SET_FAVORITE_FAIL,
    payload: error
  }
}

export function addFavorites(userLogin){
  return async (dispatch) =>{
    dispatch(actionSetFavorite(userLogin))
      try{
        const response = await axios.patch(`http://localhost:8765/users/${userLogin.id}`, userLogin)
        dispatch(actionSetFavoriteOk(response.data))
      }catch(error){
        dispatch(actionSetFavoriteFail(error))
      }
  }
}

        // ADD USER

  export function addUser(){
    return{
      type: ADD_USER
    }
  }
  
  export function addUserOk(user){
    return{
      type: ADD_USER_OK,
      payload: user
    }
  }
  
  export function addUserFail(error){
    return{
      type: ADD_USER_FAIL,
      payload: error
    }
  }
  export function addUserNew(user){
    return async (dispatch) => {
      dispatch(addUser(user))
        try{
          const response = await axios.post('http://localhost:8765/users', user)
          dispatch(addUserOk(response.data))
        }catch(error){
          dispatch(addUserFail(error))
      }
    }
  }