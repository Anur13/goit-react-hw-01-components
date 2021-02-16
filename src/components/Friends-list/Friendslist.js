import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Friends-list-section/./Friends-list-section.module.css';

const FriendsList = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendItem}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsList;
