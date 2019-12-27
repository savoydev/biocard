import React from "react";
import styled from "styled-components";
import COLORS from "../constants/Colors";

const StyledMediaCard = styled.a`
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  overflow: hidden;
  margin-bottom: 20px;
  display: block;
  text-decoration: none !important;
  overflow: hidden;
  background: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  min-height: 200px;
  position: relative;
`;

const StyledMediaCardText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.77);
  text-align: center;
  width: 100%;
  font-size: 1.25rem;
  box-shadow: 0px -36px 36px 15px rgba(0, 0, 0, 0.77);
`;

const StyledMediaCardTitle = styled.div`
  color: ${COLORS.EGGSHELL};
  font-weight: bold;
`;

const MediaCard = props => {
  return (
    <StyledMediaCard bgImage={props.image}>
      <StyledMediaCardText>
        <StyledMediaCardTitle>Mixed Feelings</StyledMediaCardTitle>
      </StyledMediaCardText>
    </StyledMediaCard>
  );
};

export default MediaCard;
