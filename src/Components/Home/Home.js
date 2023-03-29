import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
// import img from '../../assets/imagen.png'
// import logo from '../../assets/logo.png'
import nombre from '../../assets/nombre.png'
import { Segmented } from 'antd';
import {PhoneOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'

const Home = () => (
  <div className={styles.Home}>
    <nav className={styles.NavBar}>
      {/* /* <img src={logo} width={'100px'}/> */}
      <img src={nombre} className={styles.Imagen}/> */
      <div className={styles.Phone}>
        <PhoneOutlined></PhoneOutlined>
        <p style={{margin:'10px'}}> + 34 687 589 654</p>
      </div>
    </nav>
    {/* <img src={img} className={styles.Img} /> */}
       {/* AQUI VAN LOS LINKS */}
       <div className={styles.ContainerLinks}>
        <Segmented options={['Vuelos', 'Cruceros', 'Autobús']} className={styles.Links}/>
      </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;