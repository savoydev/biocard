import React from "react";
import styled from "styled-components";
import COLORS from "../constants/Colors";
import BasicCard from "./BasicCard";

const StyledTextCard = styled(BasicCard)`
  background-color: #fff;
`;

const MediaCardText = styled.div`
  float: left;
`;

const MediaCardTitle = styled.div`
  color: ${COLORS.PRUSSIAN_BLUE};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MediaCardDescription = styled.div`
  color: ${COLORS.PRUSSIAN_BLUE};
  font-size: 1rem;
`;
const TextCard = props => {
  return (
    <StyledTextCard href={props.link}>
      <MediaCardText>
        <MediaCardTitle>{props.title}</MediaCardTitle>
        <MediaCardDescription>{props.description}</MediaCardDescription>
      </MediaCardText>
    </StyledTextCard>
  );
};

export default TextCard;
