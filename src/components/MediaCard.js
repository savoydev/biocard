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
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.77);
  text-align: center;
  font-size: 2rem;
  box-shadow: 0px -36px 36px 15px rgba(0, 0, 0, 0.77);
`;

const StyledMediaCardTitle = styled.div`
  color: ${COLORS.EGGSHELL};
  font-weight: bold;
`;

const StyledMediaVideoCard = styled.div`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(130, 130, 130, 0.25);
  margin-bottom: 20px;
  width: 100%;
  height: 310px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  animation: 1s ${fadeAnimation};
`;

export class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  getLinkType = props => {
    let link = this.props.link;

    if (link.includes("youtube") && link.includes("embed")) {
      let embedString = link.split("/embed/").pop();
      return (
        <StyledMediaVideoCard>
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
        <StyledMediaCard bgImage={this.props.image} href={this.props.link}>
          {this.props.title && (
            <StyledMediaCardText>
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
