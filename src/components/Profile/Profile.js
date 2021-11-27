import PropTypes from 'prop-types';
import { Fragment } from 'react';
import s from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Fragment>
      <div className={s.profile}>
        <div className={s.description}>
          <div className={s.img}>
            <img src={avatar} alt={username} className={s.avatar} />
          </div>
          <p className={s.name}>{username}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
          <li>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
export default Profile;

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
