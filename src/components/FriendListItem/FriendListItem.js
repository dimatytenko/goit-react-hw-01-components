// import s from './FriendListItem.module.css';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendImg,
  FriendName,
  FriendStatus,
} from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <FriendStatus status={isOnline}></FriendStatus>
      <FriendImg src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

FriendListItem.protoType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
