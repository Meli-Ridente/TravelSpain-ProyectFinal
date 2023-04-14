import React, {useEffect, useRef, useState} from 'react';
import { InfoOutlined, HeartOutlined, ShareAltOutlined, HomeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import {getVueloId} from '../../store/info/action'
import { addFavorites } from '../../store/auth/action';
import { Spin } from 'antd';
import {Link} from 'react-router-dom'
import styles from './Vuelo.module.scss';
import { Carousel } from 'antd';
import {useTranslation} from 'react-i18next'

const Destinos = () => {
  const carousel = useRef(null);
  const {vuelo, loadingVuelo} = useSelector((state) => state.VuelosReducer)
  const params = useParams()
  const [t, i18n] = useTranslation("global")
  const user = useSelector((state) => state.AuthReducer.userLogin)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVueloId(params.id))
  }, [carousel])


  const addFavorite = (vuelo) => {
    dispatch(addFavorites({...user, favorites: [...user.favorites, vuelo]}))
  }

  if(loadingVuelo){
    return(
      <Spin />
    )
  }

  return (
  <div className={styles.Vuelo}>
    <div className={styles.ContainerVuelo} >
      <img src={vuelo.img2} className={styles.Imagen} />
      <div className={styles.Infos}>
        <p className={styles.Title}>{vuelo.title}</p>
        <p className={styles.subTitle}>{vuelo.info}</p>
      </div>
      <div className={styles.nav}>
        <span>{vuelo.description}</span>
        <div>
          <Link to='/'><Button shape="round" icon={<HomeOutlined />} className={styles.Buttons}/></Link>
          <Link to='/about'><Button shape="round" icon={<InfoOutlined />} className={styles.Buttons}/></Link>
          {user !== undefined ? <Button shape="round" onClick={() => addFavorite(vuelo)} icon={<HeartOutlined /> } className={styles.Buttons}/> : <Link to='/login'></Link>}
          <Link to><Button shape="round" icon={<ShareAltOutlined /> }className={styles.Buttons}/></Link>
        </div>
      </div> 
      
    </div>
    <h1>{t("Destinos.qhacer")} {vuelo.title}? {t("Destinos.fst")}</h1>
    <Button shape="round" onClick={() => carousel?.current?.next()} className={styles.Buttons}>NEXT</Button>
    <Button shape="round" onClick={() => carousel?.current?.prev()} className={styles.Buttons}>PREV</Button>
    <div className={styles.Container}>
      <Carousel ref={carousel}>
        {vuelo.festividad?.map((fest) => {
          return (
            <div className={styles.MyCarousel}>
              <p>{fest.title}</p>
              <p>{fest.date}</p>
              <img src={fest.img} className={styles.Imagen} width={200}/>
              <p>{fest.dscp}</p>
            </div>
          )
        })}
      </Carousel>
    </div>
  </div>
  )
};

Destinos.propTypes = {};

Destinos.defaultProps = {};

export default Destinos;
