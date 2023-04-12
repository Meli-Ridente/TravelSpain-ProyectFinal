import {
  GET_VUELOS,
  GET_VUELOS_OK,
  GET_VUELOS_FAIL,
  GET_OFERTAS,
  GET_OFERTAS_OK,
  GET_OFERTAS_FAIL,
  GET_VUELO,
  GET_VUELO_OK,
  GET_VUELO_FAIL
} from './actionType'

const initialState = {
  vuelos: [],
  loadingVuelos: false,
  ofertas: [],
  loadingOfertas: false,
  vuelo: {},
  loadingVuelo: false,
  error: {
    message: ''
  },
}

export default function VuelosReducer(state = initialState, action){
  switch(action.type){
    case GET_VUELOS: 
      state = {...state, loadingVuelos: true}
      break;
    
    case GET_VUELOS_OK:
      state = {...state, loadingVuelos: false, vuelos: action.payload}
      break;

    case GET_VUELOS_FAIL:
      state = {...state, loadingVuelos: false, vuelos:[], error: {message: action.payload}}
      break;

    case GET_OFERTAS:
      state = {...state, loadingOfertas: true}
      break;
    
    case GET_OFERTAS_OK:
      state = {...state, loadingOfertas: false, ofertas: action.payload}
      break;
    
    case GET_OFERTAS_FAIL:
      state = {...state, loadingOfertas: false, ofertas:[]}


    case GET_VUELO:
      state = {...state, loadingVuelo: true}
      break

    case GET_VUELO_OK: 
      state = {...state, loadingVuelo: false, vuelo: action.payload}
      break

    case GET_VUELO_FAIL:
      state = {...state, loadingVuelo: false, vuelo: {}}


    default:
      break
  }
  return state;
}