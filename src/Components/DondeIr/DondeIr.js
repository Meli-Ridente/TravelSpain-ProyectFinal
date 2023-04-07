import React from 'react';
import PropTypes from 'prop-types';
import styles from './DondeIr.module.scss';
import mapa from '../../assets/mapa.jpg'

const DondeIr = ({isVisible}) => (
  isVisible && ( 
  <div className={styles.DondeIr}>
    <h2>Descubre los mejores destinos de España</h2>
      <div className={styles.ContainerUls}>
        <ul className='Uls'>
          <li>Madrid</li>
          <li>Barcelona</li>
          <li>Valencia</li>
          <li>Sevilla</li>
          <li>Alicante</li>
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
      </div>
  </div>
  )
);

DondeIr.propTypes = {};

DondeIr.defaultProps = {};

export default DondeIr;
