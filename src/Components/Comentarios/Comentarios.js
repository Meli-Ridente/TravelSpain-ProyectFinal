import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Comentarios.module.scss';
import { setComment } from '../../store/info/action';
import { Button, Spin} from 'antd';
import { getComments } from '../../store/info/action';
import { useDispatch, useSelector } from 'react-redux';

const Comentarios = () => {
  const dispatch = useDispatch()
  const inputComment = useRef('')
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
      <input ref={inputComment}></input>
      <Button type="primary" htmlType="submit" onClick={() => addComment()}>Submit</Button> 
      <div className={styles.First}>
        {comments?.map((cm) =>
          <div>
            {cm?.info}
          </div>
        )}
      </div>
    </div>
  )
};

Comentarios.propTypes = {};

Comentarios.defaultProps = {};

export default Comentarios;
