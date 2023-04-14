import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import PropTypes from 'prop-types';
import styles from './Ofertas.module.scss';
import { getOfertas } from '../../store/info/action';
import fuego from '../../assets/fuego.webp'
import {useTranslation} from 'react-i18next'

const Ofertas = () => {
  const [t, i18n] = useTranslation("global")
  const dispatch = useDispatch()
  const {ofertas, loadingOfertas}= useSelector((state) => state.VuelosReducer)
  console.log(ofertas)
  useEffect(() => {
    dispatch(getOfertas())
  },[])

  return (
    <div className={styles.Ofertas}>
      <div className={styles.OfertasCont}>
        <img src={fuego} width={80} height={150} style={{marginRight: '20px'}}/>
        <div className={styles.Header}>
          <p className={styles.PRIME}>{t("Ofertas.prime")}</p>
          <p className={styles.MejoresOf}>{t("Ofertas.mejorOf")}</p>
          <p className={styles.Red}>{t("Ofertas.ahorra")}</p>
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
