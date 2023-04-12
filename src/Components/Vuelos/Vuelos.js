import React , {useState, useEffect} from 'react';
import styles from './Vuelos.module.scss';
import {useDispatch, useSelector} from 'react-redux'
import {getVuelos} from '../../store/info/action'
import { Spin } from 'antd';
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import fuego from '../../assets/fuego.webp'

const Vuelos = () => {
  const [t, i18n] = useTranslation("global")
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

  if(loadingVuelos){
    return(
      <Spin />
    )
  }
  
  const handleChange = e=>{
    setFilter(e.target.value)
    filterVuelos(e.target.value)
  }

  return(
  <div className={styles.Vuelos}>
    <div className={styles.DivBuscador}>
      <input className={styles.Buscador} type='text' placeholder='Busca tu vuelo' onChange={handleChange}></input>
      <div className={styles.promos}>
        <img src={fuego} width={50} height={100}/>
        <p>{t("Vuelos.no")} <Link to='/ofertas'>{t("Vuelos.promos")}</Link></p>
      </div>
    </div>
    {filter.map((vuelo) => 
      <div className={styles.ContainerVuelos} >
        <img src={vuelo.img1} className={styles.Imagen} />
        <p className={styles.Border}></p>
        <div className={styles.DatosVuelo}>
          <p className={styles.date}>{vuelo.date}</p>
          <Link to={`/destinos/${vuelo.id}`}><p className={styles.title}>{vuelo.title}</p></Link>
          <p className={styles.price}>{vuelo.price} </p>
          <p className={styles.Prime}>♦️{t("Vuelos.prime")}</p>
        </div>
      </div>
    )}
  </div>
  )
};

Vuelos.propTypes = {};

Vuelos.defaultProps = {};

export default Vuelos;
