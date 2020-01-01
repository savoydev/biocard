import React from "react";
import styled from "styled-components";
import { StyledBasicCard } from "./BasicCard";

const StyledUserCard = styled(StyledBasicCard)`
  min-height: 100px;
  box-shadow: none;

  :hover {
    transform: none;
    box-shadow: none;
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
  color: ${props => props.color.BASE};
`;

const UserDescription = styled.p`
  color: ${props => props.color.BASE};
  font-size: 1rem;
  margin: 0;
`;

const UserImage = styled.div`
  background: ${props => props.color.DEFAULT_GRADIENT}
  box-shadow: ${props => props.cardStyle.USER_IMAGE_SHADOW};
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
    background-image: url('${props => props.image}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const UserCard = props => {
  return (
    <StyledUserCard cardStyle={props.cardStyle} as="div">
      {props.image && (
        <UserImage
          image={props.image}
          color={props.color}
          cardStyle={props.cardStyle}
        >
          <div></div>
        </UserImage>
      )}
      <UserText>
        <UserName color={props.color}>{props.name}</UserName>
        <UserDescription color={props.color}>
          {props.description}
        </UserDescription>
      </UserText>
    </StyledUserCard>
  );
};

export default UserCard;
