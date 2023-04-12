import React, { useState } from 'react';
import styles from './Home.module.scss';
import img from '../../assets/bkg.jpg'
import Dondeir from '../../Components/DondeIr/DondeIr'
import DondeirPage from '../../Pages/DondeirPage'
import QueHacer from '../../Components/QueHacer/QueHacer'
import QueHacerPage from '../../Pages/QueHacerPage';
import {DownOutlined} from '@ant-design/icons'
import Ofertas from '../Ofertas/Ofertas';
import {useTranslation} from 'react-i18next'

export const Home = () => {

  const [t, i18n] = useTranslation("global")
  const [isVisibleDondeIr, setIsVisibleDondeIr] = useState(false)
  const [isVisibleQueHacer, setisVisibleQueHacer] = useState(false)

 
  return (
    <div className={styles.Home}>
      <div className={styles.ContainerUl}>
        <ul className={styles.Uls}>
          <li onClick={() =>  setIsVisibleDondeIr(!isVisibleDondeIr)}>
            <p className={styles.Down}>{t("Home.dondeIr")} <DownOutlined /></p>
            {!isVisibleQueHacer? 
              <Dondeir isVisible={isVisibleDondeIr}/>
            : '' }
          </li>  
          <li onClick={() => setisVisibleQueHacer(!isVisibleQueHacer)}>
            <p className={styles.Down}>{t("Home.queHacer")} <DownOutlined/></p>
            {!isVisibleDondeIr ? 
                <QueHacerPage isVisible={isVisibleQueHacer}/>
              : '' }
          </li>
        </ul>
        <div className={styles.Botones}>
          <button onClick={() => i18n.changeLanguage('es')} className={styles.BotonEs}></button>
          <button onClick={() => i18n.changeLanguage('en')} className={styles.BotonEn}></button>
        </div>
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