import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/Colors";

const StyledButton = styled.button`
  background: ${props => props.theme.color.DEFAULT_GRADIENT};
  color: ${COLORS.EGGSHELL};
  font-family: "Open Sans";
  font-weight: bold;
  border: none;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: ${props => props.theme.cardStyle.BTN_BORDER_RADIUS};
  margin: 0 auto;
  display: block;
  min-width: 100px;
  padding: 10px 30px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: ${props => props.theme.cardStyle.BTN_SHADOW};
  transition: all 0.3s;
  &:hover {
    transform: scale(1.025);
    transition: all 0.3s;
    box-shadow: 0px 5px 15px rgba(130, 130, 130, 0.25);
  }
`;

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
