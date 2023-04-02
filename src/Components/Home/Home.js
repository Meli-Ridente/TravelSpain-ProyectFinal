import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import img from '../../assets/img.png'
import { Breadcrumb,Carousel  } from 'antd';

const Home = () => {

  return (
    <div className={styles.Home}>
      <Breadcrumb className='Breadcrumb'
          separator=">"
          items={[
            {
              title: 'Home',
              href: '/'
            },
            {
              title: 'Vuelos',
              href: '/vuelos',
            },
            {
              title: 'Cruceros',
              href: '/vuelos',
            },
            {
              title: 'Dónde ir',
              href: '/cruceros'
            },
          ]}
        />
        <img src={img} className={styles.Img}/>
       
    
    </div> 
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;