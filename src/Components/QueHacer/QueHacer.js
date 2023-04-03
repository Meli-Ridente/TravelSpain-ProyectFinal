import React from 'react';
import PropTypes from 'prop-types';
import styles from './QueHacer.module.scss';
import turismo from '../../assets/turismo.webp'
import images from '../../assets/images.jpg'

const QueHacer = () => (
  <div className={styles.QueHacer}>
    <div className={styles.ContainerQueHacer}>
      <h1>Planes ideales</h1>
      <div className={styles.Linea}><p></p></div>
      <p>Elige el plan que más te guste para hacer que tu estancia en España sea inolvidable</p>
      <div className={styles.ImgsContainer}>
        <img src={turismo} width={300} height={300}/>
        <img src={images} width={600}/>
      </div>
    </div>
  </div>
);

QueHacer.propTypes = {};

QueHacer.defaultProps = {};

export default QueHacer;
