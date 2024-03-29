import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

export const StyledBasicCard = styled.a`
  border-radius: ${(props) => props.theme.cardStyle.BORDER_RADIUS};
  box-shadow: ${(props) => props.theme.cardStyle.CARD_SHADOW};
  padding: 20px;
  overflow: hidden;
  margin-bottom: 20px;
  display: block;
  text-decoration: none !important;
  overflow: hidden;
  position: relative;
  animation: 2s ${fadeAnimation};
  transition: all 0.3s;

  &:hover {
    // @media (min-width: 768px) {
    //   transform: scale(1.025);
    //   transition: all 0.3s;
    //   box-shadow: 0px 5px 15px rgba(130, 130, 130, 0.25);
    // }
  }

  @media (min-width: 1000px) {
    grid-column: 2;
  }
`;

const BasicCard = (props) => {
  return <StyledBasicCard {...props}>{props.children}</StyledBasicCard>;
};

export default BasicCard;
