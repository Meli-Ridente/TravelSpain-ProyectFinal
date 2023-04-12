import React, {useEffect} from 'react';
import { InfoOutlined, HeartOutlined, ShareAltOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import {getVueloId} from '../../store/info/action'
import { Spin } from 'antd';
import {Link} from 'react-router-dom'
import styles from './Vuelo.module.scss';

const Destinos = () => {
  
  const {vuelo, loadingVuelo} = useSelector((state) => state.VuelosReducer)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVueloId(params.id))
  }, [])

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
          <Link to='/login'><Button shape="round" icon={<HeartOutlined /> } className={styles.Buttons}/></Link>
          <Link to><Button shape="round" icon={<ShareAltOutlined /> }className={styles.Buttons}/></Link>
        </div>
      </div> 
      
    </div>
    <h1>¿Qué hacer en {vuelo.title}? ¡Conoce sus festividades!</h1>
  </div>
  )
};

Destinos.propTypes = {};

Destinos.defaultProps = {};

export default Destinos;
