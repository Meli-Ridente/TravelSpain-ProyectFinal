import React from 'react';
import PropTypes from 'prop-types';
import styles from './DondeIr.module.scss';
import mapa from '../../assets/mapa.jpg'
import {useTranslation} from 'react-i18next'

const DondeIr = ({isVisible}) => {
  const [t, i18n] = useTranslation("global")
  return(
    isVisible && ( 
    <div className={styles.DondeIr}>
      <h2>{t("DondeIr.h2")}</h2>
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
  )
};

DondeIr.propTypes = {};

DondeIr.defaultProps = {};

export default DondeIr;
