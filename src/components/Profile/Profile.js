import PropTypes from 'prop-types';
// import s from './Profile.module.css';
import {
  ProfileBox,
  ProfileDescription,
  ProfileBoxImg,
  ProfileImg,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStatsList,
  ProfileStatsItem,
  ProfileStatsLabel,
  ProfileStatsQuantity,
} from './Profile.styled';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileBox>
      <ProfileDescription>
        <ProfileBoxImg ProfileBoxImg>
          <ProfileImg src={avatar} alt={username} />
        </ProfileBoxImg>
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <ProfileStatsList>
        <ProfileStatsItem>
          <ProfileStatsLabel>Followers</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.followers}</ProfileStatsQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsLabel>Views</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.views}</ProfileStatsQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsLabel>Likes</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.likes}</ProfileStatsQuantity>
        </ProfileStatsItem>
      </ProfileStatsList>
    </ProfileBox>
  );
}
export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
