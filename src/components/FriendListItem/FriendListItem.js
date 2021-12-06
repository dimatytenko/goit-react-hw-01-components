import s from './FriendListItem.module.css';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

let cx = classNames.bind(s);

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={cx('status', { 'status-onlaine': isOnline })}></span>
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
