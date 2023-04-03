import React, { useState } from 'react';
import styles from './Home.module.scss';
import img from '../../assets/img.png'
import DondeirPage  from '../../Pages/DondeirPage'
import QueHacerPage from '../../Pages/QueHacerPage'
import {DownOutlined} from '@ant-design/icons'

export const Home = () => {

  const [isVisibleDondeIr, setIsVisibleDondeIr] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
 
  return (
    <div className={styles.Home}>
        <div className={styles.ContainerUl}>
          <ul>
            <li onClick={() => setIsVisibleDondeIr(!isVisibleDondeIr)}>
              <p>Dónde ir <DownOutlined className={styles.Down} /></p>
              <DondeirPage isVisible={isVisibleDondeIr}/>
            </li>
          </ul> 
          <ul>
            <li>
              <p>Qué hacer <DownOutlined className={styles.Down}/>
              <QueHacerPage />
              </p>
            </li>
          </ul>
        </div>
        <img src={img} className={styles.Img}/>
      
      
    </div>
  )
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;