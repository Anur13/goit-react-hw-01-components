import React from 'react';
import userInfo from '../Profile/user.json';
import Profile from '../Profile/Profile';

const UserSection = () => {
  return <Profile key={userInfo.name} {...userInfo} />;
};

export default UserSection;
