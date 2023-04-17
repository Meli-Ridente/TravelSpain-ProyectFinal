import React , {useEffect} from 'react';
import styles from './About.module.css';
import { getAbout } from '../../store/info/action';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {RightOutlined} from '@ant-design/icons'
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
    <span className={styles.link}><Link to='/comentarios'><RightOutlined className={styles.icon}/>{t("About.comments")}</Link></span>  
    <div className={styles.Title}>
      <h2>{t("About.abt")}</h2>
    </div>
      <div class={styles.containerGlass}>
        <img class={styles.img} src="https://img.freepik.com/free-vector/sunset-sunrise-ocean-nature-landscape_33099-2244.jpg" alt="" />
      </div>
      <img src={avatar}className={styles.IMG}/>
      {about.map((ab) => 
        <div className={styles.CardDatos}>
          <h1 className={styles.name}>{ab?.name}</h1>
          <h2>{ab?.title}</h2>
          <h2 style={{fontWeight:'bold'}}>{ab?.subtitle}</h2>
        </div>
      )}
    </div>
  )
};

About.propTypes = {};

About.defaultProps = {};

export default About;
