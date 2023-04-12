import React from 'react';
import PropTypes from 'prop-types';
import styles from './QueHacer.module.scss';
import turismo from '../../assets/turismo.webp'
import images from '../../assets/images.jpg'
import mar from '../../assets/mar.jpg'
import fly from '../../assets/fly.webp'
import turista from '../../assets/turista.jpg'
import globos from '../../assets/globos.jpg'
import {useTranslation} from 'react-i18next'

const QueHacer = () => {
  const [t, i18n] = useTranslation("global")
  return (
  <div className={styles.QueHacer}>
    <div className={styles.ContainerQueHacer}>
      <h2 className={styles.h1}>{t("QueHacer.h1")}</h2>
      <p>{t("QueHacer.text")}</p>
      <div className={styles.firstContainer}>
        <div className={styles.ImgsContainer}>
          <img src={turismo} width={370} style={{margin: '5px'}}/>
          <img src={images} width={440} style={{margin: '5px'}}/>
          <img src={fly} width={370} style={{margin: '5px'}}/>
          </div>
          <h2 className={styles.h1}>{t("QueHacer.time")}</h2>
          <div className={styles.ImgsContainer}>
            <img src={mar} width={650} style={{marginLeft: '40px'}} />
            <img src={turista} width={450} style={{marginLeft: '20px'}} />
          </div>
      </div>
    </div>
  </div>
  )
};

QueHacer.propTypes = {};

QueHacer.defaultProps = {};

export default QueHacer;
