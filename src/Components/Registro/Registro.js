import React, { useState, useEffect } from 'react';
import styles from './Registro.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, Form, Input , Spin} from 'antd';
import { useNavigate } from 'react-router-dom';
import { addUserNew } from '../../store/auth/action';
import { setUserLogin } from '../../store/auth/action';
import {useTranslation} from 'react-i18next'

const Registro = () => {
  const [t, i18n] = useTranslation("global")
  const dispatch = useDispatch()
  const {user, loadingUser} = useSelector((state) => state.AuthReducer)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() =>{
    dispatch(addUserNew())
  },[])

  if(loadingUser){
    return(
      <Spin />
    )
  }

  function tryLogin(){
    if(user !== undefined){
      dispatch(setUserLogin(user))
      navigate('/newuser')
    }
  }

  return ( 
  <div className={styles.Registro}>
    <h1>{t("Registro.inicio")}</h1>
    <div className={styles.Form}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        onFinish={tryLogin}
      >
        <Form.Item
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
          >
          <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
          <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
          <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
          <Button type="primary" htmlType="submit" onClick={tryLogin}> 
            Submit
          </Button> 
        </Form.Item>
      </Form>
    </div>
  </div>
  )
};

Registro.propTypes = {};

Registro.defaultProps = {};

export default Registro;
