import React from "react";
import styled from "styled-components";
import COLORS from "../constants/Colors";
import TextCard from "./TextCard";
import MediaCard from "./MediaCard";
import SocialMediaCard from "./SocialMediaCard";
import UserCard from "./UserCard";

/// COLOR PALETTE
/// prussian blue #0b3c5d
/// sky blue #328cc1
/// gold leaf #d9b310
/// ivory black #1d2731
/// effshell #f5f5f5

const StyledAppContainer = styled.div`
  background-color: ${COLORS.EGGSHELL};
  padding: 16px;
  height: 100%;

  @media (min-width: 768px) {
    max-width: 700px;
    margin: 0 auto;
  }
`;

const AppContainer = props => {
  return <StyledAppContainer>{props.children}</StyledAppContainer>;
};

export default AppContainer;
