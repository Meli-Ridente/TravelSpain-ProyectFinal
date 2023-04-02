import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { VuelosPage } from './Pages/VuelosPage';
import { Header } from './Components/Header';
import { CrucerosPage } from './Pages/CrucerosPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} ></Route>
        <Route exact path='/vuelos' element={<VuelosPage />} ></Route>
        <Route exact path='/cruceros' element={<CrucerosPage />} ></Route>
      </Routes>
    </div>
  );
}

export default App;