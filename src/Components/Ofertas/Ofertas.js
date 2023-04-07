import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Ofertas.module.scss';
import fuego from '../../assets/fuego.webp'

const Ofertas = () => {

  const [ofertas, setOfertas] = useState([])

  useEffect(() => {
    fetch('http://localhost:8765/ofertas')
    .then((response) => response.json())
    .then((json) => setOfertas(json))
    .catch((error) => console.error(error))
  },[])
  console.log(ofertas)
  return (
    <div className={styles.Ofertas}>
      <div className={styles.OfertasCont}>
        <img src={fuego} width={80} height={150}/>
        <div className={styles.Header}>
          <p className={styles.PRIME}>PRIME</p>
          <p className={styles.MejoresOf}>MEJORES OFERTAS</p>
          <p className={styles.Red}>¡Ahorra y visita nuestros destinos!</p>
        </div>
      </div>
      <div className={styles.Container}>
        {ofertas.map((oferta) => 
        <div className={styles.ContainerCard}>
          <img src={oferta.img} className={styles.Img}/>
          <p className={styles.Border}></p>
          <div className={styles.Card}>
            <p>{oferta.title}</p>
            <p className={styles.price}>{oferta.price}</p>
            <div className={styles.Porcentaje}>-40%</div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
};

Ofertas.propTypes = {};

Ofertas.defaultProps = {};

export default Ofertas;
