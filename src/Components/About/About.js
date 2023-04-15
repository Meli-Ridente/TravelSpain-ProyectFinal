import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';
import { getAbout } from '../../store/info/action';
import {useDispatch, useSelector} from 'react-redux'
import { Spin } from 'antd';
import avatar from '../../assets/avatar.webp'
import {useTranslation} from 'react-i18next'

const About = () => {
  const dispatch = useDispatch()
  const {about, loadingAbout} = useSelector((state) => state.VuelosReducer)
  const [t, i18n] = useTranslation("global")

  useEffect(() => {
    dispatch(getAbout())
  },[])

  if(loadingAbout){
    return(
      <Spin />
    )
  }

  return (
    <div className={styles.About}>  
    <div className={styles.Title}>
      <h2>{t("About.abt")}</h2>
    </div>
      <div class={styles.containerGlass}>
        <img class={styles.img} src="https://img.freepik.com/free-vector/sunset-sunrise-ocean-nature-landscape_33099-2244.jpg" alt="" />
      </div>
      <img src={avatar}className={styles.IMG}/>
      {about.map((ab) => 
        <div className={styles.CardDatos}>
          <h1>{ab?.title}</h1>
          <h2 style={{fontWeight:'bold'}}>{ab?.subtitle}</h2>
          <h2 className={styles.name}>{ab?.name}</h2>
        </div>
      )}
    </div>
  )
};

About.propTypes = {};

About.defaultProps = {};

export default About;
