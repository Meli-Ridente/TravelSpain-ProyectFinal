import React , {useState, useEffect} from 'react';
import styles from './Vuelos.module.scss';
import {useDispatch, useSelector} from 'react-redux'
import {getVuelos} from '../../store/info/action'
import { Spin } from 'antd';
import {Link} from 'react-router-dom'
import fuego from '../../assets/fuego.webp'

const Vuelos = () => {
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
        <p>No dejes pasar nuestras <Link to='/ofertas'>PROMOCIONES!</Link></p>
      </div>
    </div>
    {filter.map((vuelo) => 
                    // NO ESTA LISTO EL LINK
      <div className={styles.ContainerVuelos} >
        <img src={vuelo.img1} className={styles.Imagen} />
        <p className={styles.Border}></p>
        <div className={styles.DatosVuelo}>
          <p className={styles.date}>{vuelo.date}</p>
          <Link to={`/vuelo/${vuelo.id}`}><p className={styles.title}>{vuelo.title}</p></Link>
          <p className={styles.price}>{vuelo.price} </p>
          <p className={styles.Prime}>♦️Precio prime por persona</p>
        </div>
      </div>
    )}
  </div>
  )
};

Vuelos.propTypes = {};

Vuelos.defaultProps = {};

export default Vuelos;
