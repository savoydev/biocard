import React from "react";
import styled from "styled-components";
import COLORS from "../constants/Colors";

const StyledUserCard = styled.div`
  background-color: ${COLORS.IVORY_BLACK};
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const UserText = styled.div`
  float: left;
`;

const UserName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${COLORS.EGGSHELL};
`;

const UserDescription = styled.div`
  color: ${COLORS.EGGSHELL};
  font-size: 1rem;
`;

const UserImage = styled.div`
  float: left;
  background-color: #ccc;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  margin-right: 20px;
`;

const UserCard = props => {
  return (
    <StyledUserCard>
      <UserImage />
      <UserText>
        <UserName>{props.name}</UserName>
        <UserDescription>{props.description}</UserDescription>
      </UserText>
    </StyledUserCard>
  );
};

export default UserCard;
