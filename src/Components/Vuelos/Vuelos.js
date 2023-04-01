import React from 'react';
import PropTypes from 'prop-types';
import styles from './Vuelos.module.scss';
import { Breadcrumb  } from 'antd';

const Vuelos = () => {
  return(
  <div className={styles.Vuelos}>
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
            href: '/cruceros',
          },
          {
            title: '',
          },
        ]}
      />
  </div>
  )
};

Vuelos.propTypes = {};

Vuelos.defaultProps = {};

export default Vuelos;
