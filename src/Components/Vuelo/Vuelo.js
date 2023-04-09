import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import {getVueloId} from '../../store/info/action'
import { Spin } from 'antd';
import {Link} from 'react-router-dom'
import styles from './Vuelo.module.scss';

const Vuelo = () => {
  
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
      <p className={styles.Title}>{vuelo.title}</p>
      <p className={styles.subTitle}>{vuelo.info}</p>
    </div>
  </div>
  )
};

Vuelo.propTypes = {};

Vuelo.defaultProps = {};

export default Vuelo;
