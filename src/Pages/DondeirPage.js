import React, {useEffect, useState} from 'react'
import Barcelona from '../assets/Barcelona.avif'
import mapa from '../assets/mapa.jpg'
import {getVuelos} from '../store/info/action'
import {useDispatch, useSelector} from 'react-redux'
import {Link, Navigate} from 'react-router-dom'

const DondeirPage = () => {

  const dispatch = useDispatch()
  const {vuelos, loadingVuelos} = useSelector((state) => state.VuelosReducer)
  const [filter, setFilter] = useState(vuelos)


  useEffect(() => {
    dispatch(getVuelos())
  },[])
  
  const filterVuelos = (filter) => {
    let results = vuelos.filter((vuelo) => {
      if(vuelo.title.toLowerCase().includes(filter.toLowerCase())){
        return vuelo;
      }
    })
    setFilter(results)
  }

  const handleChange = e=>{
    setFilter(e.target.value)
    filterVuelos(e.target.value)
  }

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
        <select for="Destinos" style={{width: '400px', marginTop: '20px', height: '50px', border:'3px black solid', textAlign:'center',fontSize:'20px',}}>
          <option>Escoge tu destino:</option>
          <option value="Madrid"> Madrid</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Valencia">Valencia</option>
          <option value="Sevilla">Sevilla</option>
          <option value="Zaragoza">Zaragoza</option>
          <option value="Málaga">Málaga</option>
          <option value="Bilbao">Bilbao</option>
          <option value="Santiago">Santiago de compostela</option>
          <option value="Salamanca">Salamanca</option>
          <option value="Santander">Santander</option>
          <option value="Cáceres">Cáceres</option>
          <option value="Canarias">Islas Canarias</option>
          <option value="Baleares">Islas Baleares</option>
          <option value="Toledo">Toledo</option>
          <option value="Alicante">Alicante</option>
        </select>
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