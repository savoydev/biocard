import React from "react";
import styled from "styled-components";
import COLORS from "../constants/Colors";

const StyledMediaCard = styled.a`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  overflow: hidden;
  margin-bottom: 20px;
  display: block;
  text-decoration: none !important;
  overflow: hidden;
`;

const MediaCardText = styled.div`
  float: left;
`;

const MediaCardTitle = styled.div`
  color: ${COLORS.PRUSSIAN_BLUE};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MediaCardDescription = styled.div`
  color: ${COLORS.PRUSSIAN_BLUE};
  font-size: 1rem;
`;
const TextCard = props => {
  return (
    <StyledMediaCard href={props.link}>
      <MediaCardText>
        <MediaCardTitle>{props.title}</MediaCardTitle>
        <MediaCardDescription>{props.description}</MediaCardDescription>
      </MediaCardText>
    </StyledMediaCard>
  );
};

export default TextCard;
