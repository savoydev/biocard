import React from "react";
import styled from "styled-components";
import COLORS from "../constants/Colors";

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
