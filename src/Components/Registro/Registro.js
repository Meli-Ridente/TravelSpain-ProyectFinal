import React, { useState, useEffect } from 'react';
import styles from './Registro.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, Form, Input , Spin} from 'antd';
import { useNavigate } from 'react-router-dom';
import { addUserNew } from '../../store/auth/action';
import { setUserLogin } from '../../store/auth/action';
import {useTranslation} from 'react-i18next'
import { getUser } from '../../store/auth/action';

const Registro = () => {
  const [t, i18n] = useTranslation("global")
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.AuthReducer)
  const {userLogin} = useSelector((state) => state.AuthReducer)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()


  // if(loadingUser){
  //   return(
  //     <Spin />
  //   )
  // }

  useEffect(() =>{
    dispatch(getUser())
  },[])

  if(userLogin !== undefined){
    navigate('/profile')
  }

  function addNewUser(){
    dispatch(addUserNew({email: email, password: password, name: name, address: address, phone: phone, favorites: []}))
  }

  function tryLogin(){
    const users = user.find((users) => users.email ===email && users.password ===password);
    console.log('a', users)
    if(user){
      // console.log('a', users)
      
      dispatch(setUserLogin(users))
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
        onFinish={() => addNewUser()}
      >
        <Form.Item
        label="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
        >
        <Input />
        </Form.Item>

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
          label="Address"
          name="address"
          value={email}
          onChange={(e) => setAddress(e.target.value)}
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
          label="Phone"
          name="phone"
          value={email}
          onChange={(e) => setPhone(e.target.value)}
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
