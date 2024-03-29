import React from 'react';
import styled from 'styled-components';
import { StyledBasicCard } from './BasicCard';

const StyledUserCard = styled(StyledBasicCard)`
  min-height: 100px;
  box-shadow: none;

  :hover {
    transform: none;
    box-shadow: none;
  }

  @media (min-width: 1000px) {
    grid-column: 1;
  }
`;

const UserText = styled.div`
  text-align: center;
`;

const UserName = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Heebo";
  margin: 0;
  color: ${(props) => props.theme.color.BASE};
`;

const UserDescription = styled.p`
  color: ${(props) => props.theme.color.BASE};
  font-size: 1rem;
  margin: 0;
`;

const UserImage = styled.div`
  background: ${(props) => props.theme.color.DEFAULT_GRADIENT}
  box-shadow: ${(props) => props.theme.cardStyle.USER_IMAGE_SHADOW};
  border-radius: 100%;
  height: 100px;
  width: 100px;
  margin: 0 auto;

  div {
    height: 94px;
    width: 94px;
    position: relative;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    background-color: #fff;
    background-image: url('${(props) => props.image}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const UserCard = (props) => {
  return (
    <StyledUserCard as="div">
      {props.user.image && (
        <UserImage image={props.user.image}>
          <div></div>
        </UserImage>
      )}
      <UserText>
        <UserName>{props.user.name}</UserName>
        <UserDescription>{props.user.description}</UserDescription>
      </UserText>
    </StyledUserCard>
  );
};

export default UserCard;
