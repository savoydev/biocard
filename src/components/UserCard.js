import React from "react";
import styled from "styled-components";
import COLORS from "../constants/Colors";
import BasicCard from "./BasicCard";

const StyledUserCard = styled(BasicCard)`
  background-color: #fff;
`;

const UserText = styled.div`
  float: left;
`;

const UserName = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${COLORS.PRUSSIAN_BLUE};
`;

const UserDescription = styled.div`
  color: ${COLORS.PRUSSIAN_BLUE};
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
