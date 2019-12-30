import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeAnimation = keyframes`${fadeIn}`;

const StyledBasicCard = styled.a`
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(130, 130, 130, 0.25);
  padding: 20px;
  overflow: hidden;
  margin-bottom: 20px;
  display: block;
  text-decoration: none !important;
  overflow: hidden;
  position: relative;
  animation: 1s ${fadeAnimation};
`;

const BasicCard = props => {
  return <StyledBasicCard {...props}>{props.children}</StyledBasicCard>;
};

export default BasicCard;
