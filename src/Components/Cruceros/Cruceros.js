import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cruceros.module.scss';
import { Breadcrumb  } from 'antd';

const Cruceros = () => {
  return (
    <div className={styles.Cruceros}>
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

Cruceros.propTypes = {};

Cruceros.defaultProps = {};

export default Cruceros;
