import friends from '../../data/friends.json';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

// const { avatar, name, isOnline, id } = friends;

const FriendList = ({ avatar, name, isOnline } = friends) => {
  return (
    <ul className={styles.friendList}>
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
