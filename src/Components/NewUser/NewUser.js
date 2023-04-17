import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewUser.module.scss';
import {useTranslation} from 'react-i18next'
import DondeirPage from '../../Pages/DondeirPage';
import QueHacerPage from '../../Pages/QueHacerPage'
import {RightOutlined} from '@ant-design/icons'
import { deleteUser } from '../../store/auth/action';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const NewUser = () => {
  const dispatch = useDispatch()
  const {userLogin} = useSelector((state) => state.VuelosReducer)
  const navigate = useNavigate()

  console.log(userLogin)

  // function deleteUsuario(user){
  //   dispatch(deleteUser(user))
  //   navigate('/login')
  // }

  const [t, i18n] = useTranslation("global")
  return (
    <div className={styles.NewUser}>
      <h1>{t("NewUser.h1")}</h1>
      <h3>{t("NewUser.text")}</h3>
      
      {/* <button onClick={() => {deleteUsuario(user)}}>ELIMINAR USUARIO</button> */}
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
