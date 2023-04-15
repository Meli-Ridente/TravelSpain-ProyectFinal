import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './Profile.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {useTranslation} from 'react-i18next'
import {EnvironmentOutlined, PhoneOutlined, MailOutlined, HeartOutlined} from '@ant-design/icons'

const Profile = () => {
  const user = useSelector((state) => state.AuthReducer.userLogin)
  const [t, i18n] = useTranslation("global")
  const navigate = useNavigate()
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    if(user === undefined)
      navigate('/login')
  },[]) //tenia user dentro de []

  return (
  <div className={styles.Profile}>
    <div class={styles.container}>
	    <h1 class={styles.textCenter}>{t("Profile.wlc")}</h1>
	      <div style={{width: '50%', alignSelf:'center'}}>
          <div style={{width: '100%'}}>
            <div class={styles.emailsignature1}>
              <div class={styles.signatureContent}>
                <div class={styles.signatureDetails}>
                  <h2 class={styles.Title}>{user?.name}</h2>
                  <span class={styles.post}>{user?.edad}</span>
                </div>
                <ul class={styles.innerContent}>
                  <li><EnvironmentOutlined />{user?.address}</li>
                  <li><PhoneOutlined />{user?.phone}</li>
                  <li><MailOutlined />{user?.email}</li>
                  <button className={styles.button} onClick={() => setShowFavorites(!showFavorites)}><HeartOutlined /></button>
                </ul>
              </div>
              <div class={styles.SignatureImg}>
                <img src={user?.img} alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
    <h2 className={styles.h2}>{t("Profile.fav")}</h2>
    {showFavorites ? 
      <div className={styles.CardFavorites}>
        {user.favorites?.map((fav) => {
          return (
            <div className={styles.MyDatos}>
              <p className={styles.texto1}>{fav.title}</p>
              <p className={styles.texto}>{fav.info}</p>
              <img src={fav.img1} width={200}/>
            </div>
          )
        })} 
      </div>
    : ' ' }
  </div>
  )
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
