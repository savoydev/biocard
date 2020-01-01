import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/Colors";
import BasicCard from "./BasicCard";

const StyledTextCard = styled(BasicCard)`
  background: ${props => props.color.DEFAULT_GRADIENT};
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
      color={props.color}
      cardStyle={props.cardStyle}
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
