import React, { useEffect, useRef } from 'react';
import styles from './Comentarios.module.scss';
import { setComment } from '../../store/info/action';
import { Button, Spin} from 'antd';
import { getComments } from '../../store/info/action';
import { useDispatch, useSelector } from 'react-redux';
import {useTranslation} from 'react-i18next'


const Comentarios = () => {
  const dispatch = useDispatch()
  const inputComment = useRef('')
  const [t, i18n] = useTranslation("global")
  const {comments, loadingComments} = useSelector((state) => state.VuelosReducer)

  useEffect(() =>{
    dispatch(getComments())
  },[])

  console.log(comments)
  function addComment(){
    dispatch(setComment({info: inputComment.current?.value}))
  }

  if(loadingComments){
    return(
      <Spin />
    )
  }
  
  return(
    <div className={styles.Comentarios}>
      <h3 className={styles.h3}>{t("Comments.com")}</h3>
      <div className={styles}>
        {comments?.map((cm) =>
          <table className={styles.tabla}>
          <p>👤</p><tr>
              <td>{cm?.info}</td>
            </tr>
          </table>
        )}
      </div>
      
      <input ref={inputComment} className={styles.input}></input>
      <Button type="primary" htmlType="submit" onClick={() => addComment()}>{t("Comments.btn")}</Button> 
    </div>
  )
};

Comentarios.propTypes = {};

Comentarios.defaultProps = {};

export default Comentarios;
