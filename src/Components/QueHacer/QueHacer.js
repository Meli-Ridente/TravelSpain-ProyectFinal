import React from 'react';
import PropTypes from 'prop-types';
import styles from './QueHacer.module.scss';
import turismo from '../../assets/turismo.webp'
import images from '../../assets/images.jpg'
import mar from '../../assets/mar.jpg'
import fly from '../../assets/fly.webp'
import turista from '../../assets/turista.jpg'
import globos from '../../assets/globos.jpg'

const QueHacer = () => (
  <div className={styles.QueHacer}>
    <div className={styles.ContainerQueHacer}>
      <h2 className={styles.h1}>PLANES IDEALES</h2>
      <p>Elige el plan que más te guste para hacer que tu estancia en España sea inolvidable!</p>
      <div className={styles.firstContainer}>
        <div className={styles.ImgsContainer}>
          <img src={turismo} width={370} style={{margin: '5px'}}/>
          <img src={images} width={440} style={{margin: '5px'}}/>
          <img src={fly} width={370} style={{margin: '5px'}}/>
          </div>
          <h2 className={styles.h1}>EL MEJOR TIEMPO INVERTIDO</h2>
          <div className={styles.ImgsContainer}>
            <img src={mar} width={650} style={{marginLeft: '40px'}} />
            <img src={turista} width={450} style={{marginLeft: '20px'}} />
          </div>
      </div>
    </div>
  </div>
);

QueHacer.propTypes = {};

QueHacer.defaultProps = {};

export default QueHacer;
