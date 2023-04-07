import React, { useState } from 'react';
import styles from './Home.module.scss';
import img from '../../assets/bkg.jpg'
import Dondeir from '../../Components/DondeIr/DondeIr'
import DondeirPage from '../../Pages/DondeirPage'
import QueHacer from '../../Components/QueHacer/QueHacer'
import QueHacerPage from '../../Pages/QueHacerPage';
import {DownOutlined} from '@ant-design/icons'
import Ofertas from '../Ofertas/Ofertas';

export const Home = () => {

  const [isVisibleDondeIr, setIsVisibleDondeIr] = useState(false)
  const [isVisibleQueHacer, setisVisibleQueHacer] = useState(false)
 
  return (
    <div className={styles.Home}>
      <div className={styles.ContainerUl}>
        <ul className={styles.Uls}>
          <li onClick={() => setIsVisibleDondeIr(!isVisibleDondeIr)}>
            <p className={styles.Down}>Dónde ir <DownOutlined /></p>
            <Dondeir isVisible={isVisibleDondeIr}/>
          </li>
          <li onClick={() => setisVisibleQueHacer(!isVisibleQueHacer)}>
            <p className={styles.Down}>Qué hacer <DownOutlined/></p>
            <QueHacerPage isVisible={isVisibleQueHacer}/>
          </li>
        </ul>
      </div>
      <img src={img} className={styles.Img}/>
      <Ofertas />
      <DondeirPage />
      <QueHacer />

    </div>
  )
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;