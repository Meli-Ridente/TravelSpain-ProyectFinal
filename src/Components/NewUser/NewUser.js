import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewUser.module.scss';
import {useTranslation} from 'react-i18next'
import DondeirPage from '../../Pages/DondeirPage';
import QueHacerPage from '../../Pages/QueHacerPage'
import {RightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const NewUser = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <div className={styles.NewUser}>
      <h1>{t("NewUser.h1")}</h1>
      <h3>{t("NewUser.text")}</h3>
      <div className={styles.Info}>
        <span className={styles.link}><Link to='/comentarios'><RightOutlined className={styles.icon}/>{t("About.comments")}</Link></span>  
        <DondeirPage />
        <QueHacerPage />
      </div>
    </div>
  )
};

NewUser.propTypes = {};

NewUser.defaultProps = {};

export default NewUser;
