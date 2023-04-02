import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import { Header } from '../Header';
import {  Dropdown, Space  } from 'antd';
import { DownOutlined, SmileOutlined, PhoneOutlined } from '@ant-design/icons';
import img from '../../assets/img.png'
import DondeirPage  from '../../Pages/DondeirPage'
import QueHacerPage from '../../Pages/QueHacerPage'

export const Home = () => {
  const items = [
    {
      key: '1',
      label: (
        <DondeirPage />
      ),
    },
    {
      key: '2',
      label: (
        <QueHacerPage />
      ),
    },
  ]
  return (
    <div className={styles.Home}>
      <Dropdown
        menu={{
          items,
        }} className={styles.DivDropdown}
        >
        <div>
          <Space style={{fontSize: '18px', margin: '7px'}}>
            Dónde ir
            <DownOutlined />
          </Space>
          <Space style={{fontSize: '18px', margin: '7px'}}>
            Qué hacer
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
      <img src={img} className='Img'/>
      
    </div>
  )
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;