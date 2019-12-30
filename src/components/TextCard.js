import React from "react";
import styled from "styled-components";
import COLORS from "../constants/Colors";
import BasicCard from "./BasicCard";

const StyledTextCard = styled(BasicCard)`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    31deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(11, 60, 93, 1) 48%,
    rgba(50, 140, 193, 1) 100%
  );
`;

const MediaCardText = styled.div`
  float: left;
`;

const MediaCardTitle = styled.div`
  color: ${COLORS.EGGSHELL};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "Heebo";
`;

const MediaCardDescription = styled.div`
  color: ${COLORS.EGGSHELL};
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
