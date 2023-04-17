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
} from './actionType'

const initialState = {
  vuelos: [],
  loadingVuelos: false,
  ofertas: [],
  loadingComments: false,
  comments: [],
  loadingAbout: false,
  about: [],
  loadingOfertas: false,
  vuelo: {},
  loadingVuelo: false,
  item: [],
  cruceros: [],
  loadingCruceros: [],
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
      break


    case GET_VUELO:
      state = {...state, loadingVuelo: true}
      break

    case GET_VUELO_OK: 
      state = {...state, loadingVuelo: false, vuelo: action.payload}
      break

    case GET_VUELO_FAIL:
      state = {...state, loadingVuelo: false, vuelo: {}, error: {message: action.payload}}
      break


    case GET_CRUCERO:
      state = {...state, loadingCruceros: true}
      break
    
    case GET_CRUCERO_OK:
      state = {...state, loadingCruceros: false, cruceros: action.payload}
      break

    case GET_CRUCERO_FAIL:
      state = {...state, loadingCruceros: false, cruceros:{}, error: {message: action.payload}}
      break
    
    case GET_ABOUT:
      state = {...state, loadingAbout: true}
      break

    case GET_ABOUT_OK:
      state = {...state, loadingAbout: false, about: action.payload}
      break

    case GET_ABOUT_FAIL:
      state = {...state, loadingAbout: false, about:{}, error: {message:action.payload}}
      break


    case SET_COMMENT:
      state = {...state, loadingComment: true}
      break

    case SET_COMMENT_OK:
      state = {...state, loadingComment: false, comments: [...state.comments, action.payload]}
      break

    case SET_COMMENT_FAIL:
      state = {...state, loadingComment: false, comments:[], error: {message: action.payload}}
      break
      

    case GET_COMMENT:
      state = {...state, loadingComments: true}
      break

    case GET_COMMENT_OK:
      state = {...state, loadingComments: false, comments: action.payload}
      break
      
    case GET_COMMENT_FAIL:
      state = {...state, loadingComments: false, comments:[], error: {message: action.payload}}
      break

    default:
      break
  }
  return state;
}