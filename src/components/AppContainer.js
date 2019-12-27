import React from "react";
import styled from "styled-components";
import COLORS from "../constants/Colors";

/// COLOR PALETTE
/// prussian blue #0b3c5d
/// sky blue #328cc1
/// gold leaf #d9b310
/// ivory black #1d2731
/// effshell #f5f5f5

const StyledAppContainer = styled.div`
  background-color: ${COLORS.EGGSHELL};
  padding: 10px;
  height: 100%;
`;

const AppContainer = props => {
  return <StyledAppContainer>{props.children}</StyledAppContainer>;
};

export default AppContainer;
