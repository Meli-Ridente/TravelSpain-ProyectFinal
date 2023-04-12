import axios from 'axios'

import {
  GET_USER,
  GET_USER_OK,
  GET_USER_FAIL
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