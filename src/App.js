import './App.css';
import { Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { VuelosPage } from './Pages/VuelosPage';
import {LoginPage} from './Pages/LoginPage'
import { Header } from './Components/Header';
import Destinos from './Components/Vuelo/Destinos'
import { CrucerosPage } from './Pages/CrucerosPage';
import {Link, Navigate } from 'react-router-dom'
import About from './Components/About/About';
import Ofertas from './Components/Ofertas/Ofertas';
import { useSelector } from 'react-redux';
import ProfilePage from './Pages/ProfilePage'

function App() {

  //NECESITO SABER COMO HACER QUE EL USERS QUE ESTA EN EL FIND LO TRAIGO ACA PARA VALIDAR QUE EXISTE EL USUARIO.
  // const user = useSelector((state) => state.AuthReducer.user)
  return (
    <div className="App">
      <Header />
      <div className='AppContainer'>
        <div className='Links'>
          <Link to='/' style={{margin: '20px'}}>🏠</Link>
          <Link to='/vuelos' style={{margin: '20px'}}>✈️</Link>
          <Link to='/cruceros' style={{margin: '20px'}}>🚢</Link>
          <Link to='/login' style={{margin: '20px'}}>👤</Link>
          
        </div>
        <Routes>
          <Route exact path='/' element={<HomePage />} ></Route>
          <Route exact path='/vuelos' element={<VuelosPage />} ></Route>
          <Route exact path='/cruceros' element={<CrucerosPage />} ></Route>
          <Route exact path='/destinos/:id' element={<Destinos />} ></Route>
          <Route exact path='/ofertas' element={<Ofertas />} ></Route>
          <Route exact path='/login' element={<LoginPage />} ></Route>
          {/* <Route exact path='/profile' element={user ? <ProfilePage /> : <Navigate to='/login' replace />}></Route> */}
          <Route exact path='/profile' element={<ProfilePage/>} ></Route>
          <Route exact path='/about' element={<About/>} ></Route>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;