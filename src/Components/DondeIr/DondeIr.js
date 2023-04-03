import React from 'react';
import PropTypes from 'prop-types';
import styles from './DondeIr.module.scss';
import mapa from '../../assets/mapa.jpg'

const DondeIr = () => (
  <div className={styles.DondeIr}>
    <h1>Descubre los mejores destinos de España</h1>
    <div className={styles.Linea}><p></p></div>
      <div className={styles.ContainerUls}>
        <ul className='Uls'>
          <li>Madrid</li>
          <li>Barcelona</li>
          <li>Valencia</li>
          <li>Sevilla</li>
          <li>Santiago de Compostela</li>
          <li>Cadiz</li>
        </ul>
        <ul>
          <li>Malaga</li>
          <li>Bilbao</li>
          <li>Salamarca</li>
          <li>Islas Canarias</li>
          <li>Zaragoza</li>
          <li>Granada</li>
        </ul>
        <img src={mapa} width={'40%'} className={styles.ImagenDondeIr}></img>
      </div>
  </div>
);

DondeIr.propTypes = {};

DondeIr.defaultProps = {};

export default DondeIr;
