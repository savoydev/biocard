import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/Colors";
import { StyledBasicCard } from "./BasicCard";

const StyledImageCard = styled(StyledBasicCard)`
  background: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  min-height: 200px;
`;

const StyledImageCardText = styled.div`
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

const StyledImageCardTitle = styled.div`
  color: ${COLORS.EGGSHELL};
  font-weight: bold;
  font-family: "Heebo";
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export class ImageCard extends React.Component {
  render() {
    return (
      <StyledImageCard
        color={this.props.color}
        bgImage={this.props.image}
        cardStyle={this.props.cardStyle}
        href={
          this.props.link.includes("https") || this.props.link.includes("http")
            ? this.props.link
            : `https://${this.props.link}`
        }
        target="_blank"
      >
        {this.props.title && (
          <StyledImageCardText color={this.props.color}>
            <StyledImageCardTitle>{this.props.title}</StyledImageCardTitle>
          </StyledImageCardText>
        )}
      </StyledImageCard>
    );
  }
}

export default ImageCard;
