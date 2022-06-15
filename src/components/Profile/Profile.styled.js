import styled from 'styled-components';

export const ProfileBox = styled.div`
  max-width: 320px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
`;

export const ProfileDescription = styled.div`
  font-weight: 500;
  text-align: center;
`;

export const ProfileBoxImg = styled.div`
  display: inline-block;
  justify-content: center;
  max-width: 120px;
  background-color: darkkhaki;
  border-radius: 50%;
`;

export const ProfileImg = styled.img`
  width: 120px;
  border-radius: 50%;
`;

export const ProfileName = styled.p`
  font-weight: 700;
`;

export const ProfileTag = styled.p`
  font-weight: 600;
  font-size: 12px;
`;
export const ProfileLocation = styled.p`
  font-weight: 600;
  font-size: 12px;
`;

export const ProfileStatsList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const ProfileStatsItem = styled.li``;

export const ProfileStatsLabel = styled.span`
  display: flex;
`;

export const ProfileStatsQuantity = styled.span`
  font-weight: 700;
`;
