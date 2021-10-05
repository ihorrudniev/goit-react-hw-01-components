import styles from '../FriendList/FriendList.module.css'
import PropTypes from "prop-types";

export default function FriendListItem({ avatar, name, isOnline = 'true' }) {
return (<li className={styles.item}>
  <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
  <img className={avatar} src={avatar} alt={name} width="48" />
  <p className={name}></p>
</li>  )
}

FriendListItem.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};