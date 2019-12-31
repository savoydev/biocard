import React from "react";
import styled from "styled-components";
import BasicCard from "./BasicCard";
import CARD_STYLES from "../constants/CardStyles";

const cardStyle = CARD_STYLES.ROUND;

const StyledUserCard = styled(BasicCard)`
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

const UserName = styled.div`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Heebo";
  color: ${props => props.color.BASE};
`;

const UserDescription = styled.div`
  color: ${props => props.color.BASE};
  font-size: 1rem;
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
    <StyledUserCard cardStyle={props.cardStyle}>
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
