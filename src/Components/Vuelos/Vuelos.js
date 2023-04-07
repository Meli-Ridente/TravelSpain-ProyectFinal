import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Vuelos.module.scss';


const Vuelos = () => {
const [vuelos, setVuelos] = useState([])

  useEffect(() => {
    fetch('http://localhost:8765/vuelos')
    .then((response) => response.json())
    .then((json) => setVuelos(json))
    .catch((error) => console.error(error))
  },[])
  
  
  return(
  <div className={styles.Vuelos}>
    {vuelos.map((vuelo) => 
      <div className={styles.ContainerVuelos}>
        <img src={vuelo.img1} className={styles.Imagen} />
        <p className={styles.Border}></p>
        <div className={styles.DatosVuelo}>
          <p className={styles.date}>{vuelo.date}</p>
          <p className={styles.title}>{vuelo.title}</p>
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
