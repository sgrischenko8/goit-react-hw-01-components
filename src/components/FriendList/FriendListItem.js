import friends from '../../data/friends.json';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import { checkOnlineStatus } from '../../utils';

const FriendListItem = ({friends}) => {
  return (
    <>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <span
            className={styles.status}
            style={{ backgroundColor: checkOnlineStatus(friend.isOnline) }}
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendListItem;
