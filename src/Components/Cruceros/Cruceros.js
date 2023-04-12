import React, { useEffect, useState} from 'react';
import { getCruceros } from '../../store/info/action';
import {useDispatch, useSelector} from 'react-redux'
import styles from './Cruceros.module.scss'
import crucero from '../../assets/crucero.webp'
import crucero2 from '../../assets/crucero2.jpg'
import {Link} from 'react-router-dom'

const Cruceros = () => {
  const dispatch = useDispatch()
  const {loadingCruceros, cruceros} = useSelector((state) => state.VuelosReducer)
  const [filter, setFilter] = useState(cruceros)

  useEffect(() => {
    dispatch(getCruceros())
  }, [])

  const filterCruceros = (filter) => {
    let results = cruceros.filter((crucero) => {
      if(crucero.title.toLowerCase().includes(filter.toLowerCase())){
        return crucero;
      }
    })
    setFilter(results)
  }

    
  const handleChange = e=>{
    setFilter(e.target.value)
    filterCruceros(e.target.value)
  }

  return (
    <div className={styles.Cruceros}>
    
      <div className={styles.Titulo}>
        <img src={crucero} className={styles.Img}/>
        <img src={crucero2} className={styles.Img}/>
      </div>
      <div className={styles.DivBuscador}>
        <input className={styles.Buscador} type='text' placeholder='Busca tu crucero' onChange={handleChange}></input>
      </div>
      <h1>LOS MEJORES CRUCEROS PARA CONOCER ESPAÑA</h1>
      <div className={styles.First}>
        {filter.map((crucero) =>
          <div className={styles.ContainerCruceros}>
            <img src={crucero.img1} className={styles.Imagen} />
            <p className={styles.Border}></p>
            <div className={styles.DatosCrucero}>
              <Link to={`/vuelo/${crucero.id}`}><p className={styles.title}>{crucero.title}</p></Link>
              <p className={styles.date}>{crucero.date}</p>
              <p className={styles.price}>{crucero.price} </p>
              <p className={styles.Prime}>♦️Precio prime por persona</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

Cruceros.propTypes = {};

Cruceros.defaultProps = {};

export default Cruceros;
