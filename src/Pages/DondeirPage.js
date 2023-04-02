import React from 'react'
// import mapa from '../assets/mapa.jpg'

const DondeirPage = () => {
  return (
    <div className='DondeIr'>
      <h2 syle={{marginRigth: '40px'}}>Descubre los mejores destinos de España</h2>
      <div className='ContainerUls'>
        <ul className='Uls'>
          <li>Madrid</li>
          <li>Barcelona</li>
          <li>Valencia</li>
          <li>Sevilla</li>
          <li>Santiago de Compostela</li>
          <li>Malaga</li>
          <li>Bilbao</li>
          <li>Salamarca</li>
          <li>Islas Canarias</li>
          <li>Zaragoza</li>
        </ul>
        {/* <img src={mapa} width={700} className='ImagenDondeIr'></img> */}
      </div>
    </div>
  )
}

export default DondeirPage