import FriendListItem from 'components/FriendListItem';
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
// import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          prop={friend}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
