import React from "react";
import styled from "styled-components";
import COLORS from "../constants/Colors";
import BasicCard from "./BasicCard";

const StyledUserCard = styled(BasicCard)`
//   background-color: ${COLORS.IVORY_BLACK};
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
  color: ${COLORS.IVORY_BLACK};
`;

const UserDescription = styled.div`
  color: ${COLORS.IVORY_BLACK};
  font-size: 1rem;
`;

const UserImage = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    31deg,
    rgba(11, 60, 93, 1) 0%,
    rgba(50, 140, 193, 1) 50%
  );
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.24);
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
    <StyledUserCard>
      {props.image && (
        <UserImage image={props.image}>
          <div></div>
        </UserImage>
      )}
      <UserText>
        <UserName>{props.name}</UserName>
        <UserDescription>{props.description}</UserDescription>
      </UserText>
    </StyledUserCard>
  );
};

export default UserCard;
