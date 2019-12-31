import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import COLORS from "../constants/Colors";
import BasicCard from "./BasicCard";

const fadeAnimation = keyframes`${fadeIn}`;

const StyledMediaCard = styled(BasicCard)`
  background: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  min-height: 200px;
`;

const StyledMediaCardText = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  text-align: center;
  font-size: 2rem;
  background: ${props => props.color.BACKGROUND_GRADIENT};
`;

const StyledMediaCardTitle = styled.div`
  color: ${COLORS.EGGSHELL};
  font-weight: bold;
  font-family: "Heebo";
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const StyledMediaVideoCard = styled.div`
  width: 100%;
  border-radius: ${props => props.cardStyle.BORDER_RADIUS};
  box-shadow: ${props => props.cardStyle.CARD_SHADOW};
  margin-bottom: 20px;
  width: 100%;
  height: 310px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  animation: 1s ${fadeAnimation};
  :hover {
    @media (min-width: 768px) {
      transform: scale(1.025);
      transition: all 0.3s;
      box-shadow: 0px 5px 15px rgba(130, 130, 130, 0.25);
    }
  }

  > iframe {
    z-index: 0;
  }
`;

export class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  getYoutubeEmbedType = () => {
    let link = this.props.link;
    let embedString = "";
    if (link.includes("embed")) {
      embedString = link.split("/embed/").pop();
    } else if (link.includes("watch")) {
      embedString = link.split("/watch?v=").pop();
    }
    return embedString;
  };

  getLinkType = props => {
    let link = this.props.link;

    if (link.includes("youtube")) {
      let embedString = this.getYoutubeEmbedType();
      return (
        <StyledMediaVideoCard cardStyle={this.props.cardStyle}>
          <iframe
            width="100%"
            title={this.props.title}
            height="315"
            src={`https://www.youtube.com/embed/${embedString}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </StyledMediaVideoCard>
      );
    } else {
      return (
        <StyledMediaCard
          color={props.color}
          bgImage={this.props.image}
          cardStyle={this.props.cardStyle}
          href={
            this.props.link.includes("https") ||
            this.props.link.includes("http")
              ? this.props.link
              : `https://${this.props.link}`
          }
          target="_blank"
        >
          {this.props.title && (
            <StyledMediaCardText color={this.props.color}>
              <StyledMediaCardTitle>{this.props.title}</StyledMediaCardTitle>
            </StyledMediaCardText>
          )}
        </StyledMediaCard>
      );
    }
  };

  render() {
    const MediaTypeCard = this.getLinkType;
    return <MediaTypeCard />;
  }
}

export default MediaCard;
