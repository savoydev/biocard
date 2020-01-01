import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { StyledBasicCard } from "./BasicCard";

const fadeAnimation = keyframes`${fadeIn}`;

const StyledMediaVideoCard = styled(StyledBasicCard)`
  width: 100%;
  height: 310px;
  z-index: 1;
  padding: 0;
  animation: 1s ${fadeAnimation};

  > iframe {
    z-index: 0;
    width: 100%;
  }
`;

const VideoCard = props => {
  return (
    <StyledMediaVideoCard as="div">
      <iframe
        title={props.title}
        height="315"
        src={`https://www.youtube.com/embed/${props.embedString}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </StyledMediaVideoCard>
  );
};

export default VideoCard;
