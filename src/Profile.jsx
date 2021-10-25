import React from 'react';
import { useSelector } from 'react-redux';
import { selectName } from './app/reduxSlice';
import l from './Profile.module.css';

function Profile() {
  
  const user = useSelector(selectName);

  return (
    <div className={l.profile}>
      <h1>{user.name}</h1>
    </div>
  )
}

export default Profile;


