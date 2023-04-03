import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { VuelosPage } from './Pages/VuelosPage';
import { Header } from './Components/Header';
import { CrucerosPage } from './Pages/CrucerosPage';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='AppContainer'>
        <div className='Links'>
          <Link to='/' style={{margin: '20px'}}>🏠HOME</Link>
          <Link to='/vuelos' style={{margin: '20px'}}>✈️VUELOS</Link>
          <Link to='/cruceros' style={{margin: '20px'}}>🚢CRUCEROS</Link>
        </div>
        <Routes>
          <Route exact path='/' element={<HomePage />} ></Route>
          <Route exact path='/vuelos' element={<VuelosPage />} ></Route>
          <Route exact path='/cruceros' element={<CrucerosPage />} ></Route>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;