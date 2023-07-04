import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import { checkOnlineStatus } from '../../utils';

const FriendListItem = ({ name, avatar, isOnline, id }) => {
  return (
    <li key={id} className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: checkOnlineStatus(isOnline) }}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
