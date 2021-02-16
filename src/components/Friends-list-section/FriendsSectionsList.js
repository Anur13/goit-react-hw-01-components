import React from 'react';
import FriendsList from '../Friends-list/Friendslist';
import friendList from '../Friends-list/friends.json';
import styles from './Friends-list-section.module.css';

const FriendsSections = () => {
  return (
    <ul className={styles.friendList}>
      {friendList.map(friend => {
        return <FriendsList key={friend.id} {...friend} />;
      })}
    </ul>
  );
};

export default FriendsSections;
