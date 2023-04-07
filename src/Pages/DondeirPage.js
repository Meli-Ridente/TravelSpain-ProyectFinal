import React from 'react'
import DondeIr from '../Components/DondeIr/DondeIr'
import Barcelona from '../assets/Barcelona.avif'
import {SearchOutlined} from '@ant-design/icons'
import mapa from '../assets/mapa.jpg'

const DondeirPage = () => {
  return (
    <div className='DondeIrContainer'>
      <div className='CardContainer'>
        <h1 style={{textShadow:'1px 1px 2px black'}}>Descubre nuestros destinos</h1>
        <div className='CardBarcelona'>
          <img src={Barcelona} width={406} height={400}/>
        </div>
        <div className='titleCard'> 
          <p>BARCELONA</p>
          <p>La ciudad de la inspiración.</p>
        </div>
        
        <div style={{position:'relative'}}>
        <input type='text' placeholder='(Buscar otros destinos)'
          style={{width: '400px', 
                marginTop: '20px',
                height: '50px', 
                border:'3px black solid', 
                textAlign:'center',
                fontSize:'20px'
                
            }}
          />
          <SearchOutlined style={{
            position: 'absolute',
            top: '40px',
            fontSize: '20px',
            right: '12px'
          }}/>
        </div>
        <button 
          style={{width: '400px', 
                marginTop: '20px',
                height: '50px', 
                border:'3px black solid', 
                textAlign:'center',
                fontSize:'20px',
                backgroundColor: 'rgb(13, 40, 53)',
                color: 'white'
            }}>
          Ir a mapa interactivo</button>
    </div>
    <img src={mapa} width={600} height={550} style={{marginTop: '6%'}}/>
  </div>
  )
}

export default DondeirPage