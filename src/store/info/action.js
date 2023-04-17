import axios from 'axios'

import {
  GET_VUELOS,
  GET_VUELOS_OK,
  GET_VUELOS_FAIL, 
  GET_OFERTAS,
  GET_OFERTAS_OK,
  GET_OFERTAS_FAIL,
  GET_VUELO,
  GET_VUELO_OK,
  GET_VUELO_FAIL,
  GET_CRUCERO,
  GET_CRUCERO_OK,
  GET_CRUCERO_FAIL,
  GET_ABOUT,
  GET_ABOUT_OK,
  GET_ABOUT_FAIL,
  SET_COMMENT,
  SET_COMMENT_OK,
  SET_COMMENT_FAIL,
  GET_COMMENT,
  GET_COMMENT_OK,
  GET_COMMENT_FAIL,
  DELETE_USER,
  DELETE_USER_OK,
  DELETE_USER_FAIL
} from './actionType'

export function actionGetVuelos() {
  return {
    type: GET_VUELOS
  }
}

export function actionGetVuelosOk(vuelos) {
  return {
    type: GET_VUELOS_OK,
    payload: vuelos
  }
}

export function actionGetVuelosFail(error){
  return{
    type: GET_VUELOS_FAIL,
    payload: error
  }
}


export function getVuelos() {
  return async (dispatch) => {
    dispatch(actionGetVuelos())
    try{
      const response = await axios.get('http://localhost:8765/vuelos')
      dispatch(actionGetVuelosOk(response.data))
    }catch(error){
      dispatch(actionGetVuelosFail(error))
    }
  }
}

        // OFERTAS

export function actionGetOfertas(){
  return {
    type: GET_OFERTAS
  }
}

export function actionGetOfertasOk(ofertas){
  return{
    type: GET_OFERTAS_OK,
    payload: ofertas
  }
}

export function actionGetOfertasFail(error){
  return{
    type: GET_OFERTAS_FAIL,
    payload: error
  }
}


export function getOfertas() {
  return async (dispatch) => {
    dispatch(actionGetOfertas())
    try{
      const response = await axios.get('http://localhost:8765/ofertas')
      dispatch(actionGetOfertasOk(response.data))
    }catch(error){
      dispatch(actionGetOfertasFail(error))
    }
  }
}


            // VUELO


export function actionGetVuelo() {
  return{
    type: GET_VUELO
  }
}

export function actionGetVueloOk(vueloId){
  return{
    type: GET_VUELO_OK,
    payload: vueloId
  }
}

export function actionGetVueloFail(error){
  return{
    type: GET_VUELO_FAIL,
    payload: error
  }
}

export function getVueloId(vueloId){
  return async (dispatch) => {
    dispatch(actionGetVuelo(vueloId))

    try{
      const response = await axios.get(`http://localhost:8765/vuelos/${vueloId}`)
      dispatch(actionGetVueloOk(response.data))
    }
    catch(error){
      dispatch(actionGetVueloFail(error))
    }
  }
}


        // CRUCEROS


export function actionGetCruceros(){
  return{
    type: GET_CRUCERO
  }
}

export function actionGetCruceroOk(cruceros) {
  return{
    type: GET_CRUCERO_OK,
    payload: cruceros
  }
}

export function actionGetCrucerosFail(error){
  return{
    type: GET_CRUCERO_FAIL,
    payload: error
  }
}

export function getCruceros(){
  return async (dispatch) => {
    dispatch(actionGetCruceros())
    try{
      const response = await axios.get('http://localhost:8765/cruceros')
      dispatch(actionGetCruceroOk(response.data))
    }catch(error){
      dispatch(actionGetCrucerosFail(error))
    }
  }
}

        //ABOUT


export function actionGetAbout(){
  return{
    type: GET_ABOUT
  }
}

export function actionGetAboutOk(datos){
  return{
    type: GET_ABOUT_OK,
    payload: datos
  }
}

export function actionGetAboutFail(error){
  return{
    type: GET_ABOUT_FAIL,
    payload: error
  }
}

export function getAbout(){
  return async (dispatch) => {
    dispatch(actionGetAbout())
    try{
      const response = await axios.get('http://localhost:8765/about')
      dispatch(actionGetAboutOk(response.data))
    }catch(error){
      dispatch(actionGetAboutFail(error))
    }
  }
}

//     SET COMMENTS


export function actionSetComment(){
  return {
    type: SET_COMMENT
  }
}

export function actionSetCommentOk(comment){
  return{
    type: SET_COMMENT_OK,
    payload: comment
  }
}

export function actionSetCommentFail(error){
  return{
    type: SET_COMMENT_FAIL,
    payload: error
  }
}

export function setComment(comment){
  return async (dispatch) =>{
    dispatch(actionSetComment(comment))
    try{
      const response = await axios.post('http://localhost:8765/Comments', comment)
      dispatch(actionSetCommentOk(response.data))
    }catch(error){
      dispatch(actionSetCommentFail(error))
    }
  }
}


//    GET COMMENTS

export function actionGetComment(){
  return{
    type: GET_COMMENT
  }
}

export function actionGetCommentOk(comments){
  return{
    type: GET_COMMENT_OK,
    payload: comments
  }
}

export function actionGetCommentFail(error){
  return {
    type: GET_COMMENT_FAIL,
    payload: error
  }
}

export function getComments() {
  return async (dispatch) => {
    dispatch(actionGetComment())
    try{
      const response = await axios.get('http://localhost:8765/Comments')
      dispatch(actionGetCommentOk(response.data))
    }catch(error){
      dispatch(actionGetCommentFail(error))
    }
  }
}


 