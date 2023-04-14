import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewUser.module.scss';
import {useTranslation} from 'react-i18next'
import DondeirPage from '../../Pages/DondeirPage';
import QueHacerPage from '../../Pages/QueHacerPage'

const NewUser = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <div className={styles.NewUser}>
      <h1>{t("NewUser.h1")}</h1>
      <h3>{t("NewUser.text")}</h3>
      <DondeirPage />
      <QueHacerPage />
    </div>
  )
};

NewUser.propTypes = {};

NewUser.defaultProps = {};

export default NewUser;
