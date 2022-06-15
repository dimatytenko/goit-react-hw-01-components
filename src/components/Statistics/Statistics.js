// import s from './Statistics.module.css';
import {
  ProfileSection,
  ProfileTitle,
  ProfileStatsList,
  ProfileStatsItem,
  ProfileStatsItemlabel,
  ProfileStatsItemPercentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <ProfileSection>
      {title && <ProfileTitle>{title}</ProfileTitle>}

      <ProfileStatsList>
        {stats.map(item => (
          <ProfileStatsItem key={item.id}>
            <ProfileStatsItemlabel>{item.label}</ProfileStatsItemlabel>
            <ProfileStatsItemPercentage>
              {item.percentage} %
            </ProfileStatsItemPercentage>
          </ProfileStatsItem>
        ))}
      </ProfileStatsList>
    </ProfileSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
