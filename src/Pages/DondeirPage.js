import React, {useEffect, useState} from 'react'
import Barcelona from '../assets/Barcelona.avif'
import mapa from '../assets/mapa.jpg'
import {getVuelos} from '../store/info/action'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Link, Navigate} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

const DondeirPage = () => {
  const [t, i18n] = useTranslation("global")
  const dispatch = useDispatch()
  const {vuelos, loadingVuelos} = useSelector((state) => state.VuelosReducer)
  const [filter, setFilter] = useState(vuelos)
  const navigate = useNavigate()


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
        <h1 style={{textShadow:'1px 1px 2px black'}}>{t("DondeIrP.h1")}</h1>
        <div className='CardBarcelona'>
          <img src={Barcelona} width={406} height={400}/>
        </div>
        <div className='titleCard'> 
          <p style={{marginLeft: '-130px'}}>BARCELONA</p>
          <p>{t("DondeIrP.p")}</p>
        </div>
        <select for="Destinos" style={{width: '400px', marginTop: '20px', height: '50px', border:'3px black solid', textAlign:'center',fontSize:'20px',}} onChange={(e) => navigate(`/destinos/${e.target.value}`)}>
          <option disabled selected>{t("DondeIrP.option")}</option>
          <option value="1"> Madrid</option>
          <option value="2">Barcelona</option>
          <option value="3">Valencia</option>
          <option value="4">Sevilla</option>
          <option value="5">Zaragoza</option>
          <option value="6">Málaga</option>
          <option value="7">Bilbao</option>
          <option value="8">Santiago de compostela</option>
          <option value="9">Salamanca</option>
          <option value="10">Santander</option>
          <option value="11">Cáceres</option>
          <option value="12">Islas Canarias</option>
          <option value="13">Islas Baleares</option>
          <option value="14">Toledo</option>
          <option value="15">Alicante</option>
        </select>
        {/* <button className='ButtonMap'>{t("DondeIrP.p2")}</button> */}
    </div>
    <img src={mapa} width={600} height={550} style={{marginTop: '6%'}}/>
  </div>
  )
}

export default DondeirPage