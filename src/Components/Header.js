import React from 'react'
import {  PhoneOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png'
import nombre from '../assets/nombre.png'
// import img from '../assets/bkg.jpg'

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
    {/* <img src={img} width={'100%'} height={600} /> */}
  </>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

   
 
