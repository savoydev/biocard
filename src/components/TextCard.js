import React from "react";
import styled, { keyframes } from "styled-components";
import COLORS from "../constants/Colors";
import BasicCard from "./BasicCard";
import { slideInUp } from "react-animations";

const slideInUpAnimation = keyframes`${slideInUp}`;

const StyledTextCard = styled(BasicCard)`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    31deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(11, 60, 93, 1) 48%,
    rgba(50, 140, 193, 1) 100%
  );
  animation: 0.5s ${slideInUpAnimation};
`;

const MediaCardText = styled.div`
  float: left;
`;

const MediaCardTitle = styled.div`
  color: ${COLORS.EGGSHELL};
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Heebo";
`;

const MediaCardDescription = styled.div`
  margin-top: 10px;
  color: ${COLORS.EGGSHELL};
  font-size: 1rem;
`;
const TextCard = props => {
  return (
    <StyledTextCard
      href={
        props.link.includes("https") || props.link.includes("http")
          ? props.link
          : `https://${props.link}`
      }
      target="_blank"
    >
      <MediaCardText>
        <MediaCardTitle>{props.title}</MediaCardTitle>
        {props.description && (
          <MediaCardDescription>{props.description}</MediaCardDescription>
        )}
      </MediaCardText>
    </StyledTextCard>
  );
};

export default TextCard;
