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
        <img src={vuelo.img1} style={{width:'500px', height:'450px', borderRadius:'20px'}} />
        <div className={styles.DatosVuelo}>
          <h1>{vuelo.title}</h1>
          <div className={styles.DatePrice}>
            <p>{vuelo.date}</p>
            <p>{vuelo.price}</p>
          </div>
        </div>
      </div>
    )}
  </div>
  )
};

Vuelos.propTypes = {};

Vuelos.defaultProps = {};

export default Vuelos;
