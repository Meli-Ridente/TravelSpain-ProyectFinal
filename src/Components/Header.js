import React from 'react'
import {  PhoneOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png'
import nombre from '../assets/nombre.png'
import {Link} from 'react-router-dom'

export const Header = () => {
 
  return (
    <>
    
    <div className='NavBar'>
      <img src={logo} style={{width: '100px'}} />
      <img src={nombre} className= 'Imagen'/> 
      <div className='Phone'>
        <PhoneOutlined></PhoneOutlined>
        <p style={{margin:'10px'}}> + 34 687 589 654</p>
      </div>
    </div>
    <div className='Links'>
      <Link to='/' style={{margin: '20px'}}>🏠HOME</Link>
      <Link to='/vuelos' style={{margin: '20px'}}>✈️VUELOS</Link>
      <Link to='/cruceros' style={{margin: '20px'}}>🚢CRUCEROS</Link>
    </div>
    <div >
       
    
       
    </div> 
  </>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

   
 
