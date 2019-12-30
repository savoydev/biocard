import React from "react";
import styled from "styled-components";
import COLORS from "../constants/Colors";
import BasicCard from "./BasicCard";

const StyledUserCard = styled(BasicCard)`
  background-color: ${COLORS.IVORY_BLACK};
  min-height: 100px;
`;

const UserText = styled.div`
  text-align: center;
`;

const UserName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Heebo";
  color: ${COLORS.EGGSHELL};
`;

const UserDescription = styled.div`
  color: ${COLORS.EGGSHELL};
  font-size: 1rem;
`;

const UserImage = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    31deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(11, 60, 93, 1) 48%,
    rgba(50, 140, 193, 1) 100%
  );
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.24);
  border-radius: 100%;
  height: 100px;
  width: 100px;
  margin: 0 auto;

  div {
    height: 90px;
    width: 90px;
    position: relative;
    top: 5px;
    left: 5px;
    border-radius: 100%;
    background-color: #fff;
  }
`;

const UserCard = props => {
  return (
    <StyledUserCard>
      <UserImage>
        <div></div>
      </UserImage>
      <UserText>
        <UserName>{props.name}</UserName>
        <UserDescription>{props.description}</UserDescription>
      </UserText>
    </StyledUserCard>
  );
};

export default UserCard;
