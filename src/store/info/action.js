// import {
//   GET_VUELOS,
//   GET_VUELOS_OK,
//   GET_VUELOS_FAIL
// } from './actionType'

// export function actionGetVuelos() {
//   return {
//     type: GET_VUELOS
//   }
// }

// export function actionGetVuelosOk(vuelos) {
//   return {
//     type: GET_VUELOS_OK,
//     payload: vuelos
//   }
// }

// export function actionGetVuelosFail(error){
//   return{
//     type: GET_VUELOS_FAIL,
//     payload: error
//   }
// }

// export function getVuelos() {
//   fetch('http://localhost:8765/vuelos')
//     .then((response) => response.json())
//     .then((json) => setVuelos(json))
//     .catch((error) => console.error(error))
// }