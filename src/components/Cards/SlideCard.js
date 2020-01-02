import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInUp, slideOutDown } from "react-animations";
import { StyledBasicCard } from "./BasicCard";

const slideInUpAnimation = keyframes`${slideInUp}`;
const slideOutDownAnimation = keyframes`${slideOutDown}`;

const StyledSlideCardHeader = styled.div`
  font-family: "Heebo";
  font-size: 1.75rem;
  margin-bottom: 10px;
`;

const SlideCardHeader = props => {
  return <StyledSlideCardHeader>{props.children}</StyledSlideCardHeader>;
};

const StyledSlideCardButtonRow = styled.div`
  overflow: hidden;
  button {
    float: left;
    margin-right: 10px;
  }
`;

const SlideCardButtonRow = props => {
  return <StyledSlideCardButtonRow>{props.children}</StyledSlideCardButtonRow>;
};

export const StyledSlideCard = styled(StyledBasicCard)`
  background-color: #fff;
  animation: 0.5s
    ${props => (props.show ? slideInUpAnimation : slideOutDownAnimation)};
  position: fixed;
  ${props => (props.show ? "bottom: 0;" : "bottom: -200%;")};
  margin: 0;
  left: 0;
  right: 0;
  z-index: 3;
  box-shadow: ${props => props.theme.cardStyle.CARD_TOP_SHADOW};
`;

const SlideCard = props => {
  return (
    <StyledSlideCard as="div" {...props}>
      {props.children}
    </StyledSlideCard>
  );
};

SlideCard.Header = SlideCardHeader;
SlideCard.ButtonRow = SlideCardButtonRow;

export default SlideCard;
