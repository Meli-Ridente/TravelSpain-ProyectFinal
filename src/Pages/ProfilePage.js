import React from 'react'
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const user = useSelector((state) => state.AuthReducer.user)
  return (
    <div>{user.id}</div>
  )
}

export default ProfilePage