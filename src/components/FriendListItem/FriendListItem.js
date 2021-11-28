import s from './FriendListItem.module.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span
        className={classnames(s.status, { [s['status-onlaine']]: isOnline })}
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.protoType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
