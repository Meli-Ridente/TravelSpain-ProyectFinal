import React from 'react'
import logo from '../assets/logo.png'
import nombre from '../assets/nombre.png'
import {PhoneOutlined} from '@ant-design/icons'


export const Header = () => {
  return (
    <nav className='NavBar'>
      <img src={logo} width={'100px'}/>
      <img src={nombre} className= 'Imagen'/> 
      <div className='Phone'>
        <PhoneOutlined></PhoneOutlined>
        <p style={{margin:'10px'}}> + 34 687 589 654</p>
      </div>
    </nav>
  )
}

   
 
