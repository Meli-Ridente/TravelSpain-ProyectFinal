import React from 'react'
import {  PhoneOutlined } from '@ant-design/icons';
import logo from '../assets/logo2.png'
import nombre from '../assets/nombre.png'
import {useTranslation} from 'react-i18next'

export const Header = () => {
 
  const [t, i18n] = useTranslation("global")
  return (
    <>
      <div className='NavBar'>
        <img src={logo} style={{width: '70px'}} />
        <div class="twelve">
          <h1>TravelSpain</h1>
        </div>
        <div className='Phone'>
          <PhoneOutlined></PhoneOutlined>
          <p style={{margin:'10px'}} className='Phone'>+34 687589654</p>
        </div>
      </div>
      <div className='Botones'>
        <button onClick={() => i18n.changeLanguage('es')} className='BotonEs'></button>
        <button onClick={() => i18n.changeLanguage('en')} className='BotonEn'></button>
      </div>
  </>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

   
 
