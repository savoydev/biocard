import React from "react";
import styled from "styled-components";

const StyledBasicCard = styled.a`
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  overflow: hidden;
  margin-bottom: 20px;
  display: block;
  text-decoration: none !important;
  overflow: hidden;
  position: relative;
`;

const BasicCard = props => {
  return <StyledBasicCard {...props}>{props.children}</StyledBasicCard>;
};

export default BasicCard;
