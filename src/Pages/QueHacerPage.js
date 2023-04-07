import React from 'react'
import QueHacer from '../Components/QueHacer/QueHacer'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'
import card5 from '../assets/card5.jpg'
import card6 from '../assets/card6.jpg'
import card7 from '../assets/card7.jpg'
import card8 from '../assets/card8.jpg'

const QueHacerPage = ({isVisible}) => (
  isVisible && (
  <>
    <h2>Planes para todos los gustos</h2>
    <div className='ContainerQueHacer'> 
      <div className='CardQueHacer'>
        <img src={card1} width={200} height={150}/>
        <p style={{fontWeight:'bold', fontSize: '20px'}}>ARTE Y CULTURA</p>
      </div>
      <div className='CardQueHacer'>
        <img src={card2} width={200} height={150}/>
        <p style={{fontWeight:'bold', fontSize: '20px'}}>COSTAS Y PLAYAS</p>
      </div>
      <div className='CardQueHacer'>
        <img src={card3} width={200} height={150}/>
        <p style={{ fontWeight:'bold', fontSize: '20px'}}>TURISMO URBANO</p>
      </div> 
      <div className='CardQueHacer'>
        <img src={card4} width={200} height={150}/>
        <p style={{fontWeight:'bold', fontSize: '20px'}}>NATURALEZA</p>
      </div>
      <div className='CardQueHacer'>
        <img src={card5} width={200} height={150}/>
        <p style={{fontWeight:'bold', fontSize: '20px'}}>GASTRONOMÍA</p>
      </div>
      <div className='CardQueHacer'>
        <img src={card6} width={200} height={150}/>
        <p style={{fontWeight:'bold', fontSize: '18px'}}>DEPORTE Y AVENTURA</p>
      </div>
      <div className='CardQueHacer'>
        <img src={card7} width={200} height={150}/>
        <p style={{fontWeight:'bold', fontSize: '20px'}}>COMPRAS</p>
      </div>
      <div className='CardQueHacer'>
        <img src={card8} width={200} height={150}/>
        <p style={{fontWeight:'bold', fontSize: '20px'}}>RUTAS</p>
      </div>
    </div>
  </>
  )
)

export default QueHacerPage