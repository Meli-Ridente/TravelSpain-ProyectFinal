import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from './Login.module.scss';
import {getUser} from '../../store/auth/action'
import { Spin } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { setUserLogin } from '../../store/auth/action';
import { useDispatch, useSelector } from 'react-redux';
import {useTranslation} from 'react-i18next'

const Login = () => {
  const dispatch = useDispatch()
  const [t, i18n] = useTranslation("global")
  const {user, loadingUser} = useSelector((state) => state.AuthReducer)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() =>{
    dispatch(getUser())
  },[])

  if(loadingUser){
    return(
      <Spin />
    )
  }

  function tryLogin(){

    const users = user.find((users) => users.email ===email && users.password ===password);
    if(users){
      dispatch(setUserLogin(users))
      navigate('/profile')
    }
    else
      alert('Usuario no registrado')
  }
  return (
    <div className={styles.Login}>
      <h1>{t("Login.login")}</h1>
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
    <div className={styles.Registro}>
        <h4>¿No eres usuario?</h4>
        <Link to='/registro'>Registrate</Link>
      </div>
  </div>
  )
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
