import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const FriendStatus = styled.span`
  display: inline-block;
  margin-right: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? '#00b300' : '#ff0000')};
`;

export const FriendImg = styled.img`
  width: 48px;
  margin-right: 15px;
`;
export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
