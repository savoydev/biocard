import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/Colors";
import { StyledBasicCard } from "./BasicCard";

const StyledImageCard = styled(StyledBasicCard)`
  background: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  min-height: 200px;
  cursor: pointer;
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
  background: ${props => props.theme.color.BACKGROUND_GRADIENT};
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
  editCard = () => {
    this.props.showEditLink(this.props.thisLink);
  };

  render() {
    return (
      <StyledImageCard
        showEditLink={this.props.edit ? this.editCard : null}
        onClick={this.props.edit ? this.editCard : null}
        as={this.props.as}
        bgImage={this.props.thisLink.ImageURL}
        href={
          this.props.thisLink.Link.includes("https") ||
          this.props.thisLink.Link.includes("http")
            ? this.props.thisLink.Link
            : `https://${this.props.thisLink.Link}`
        }
        target="_blank"
      >
        {this.props.thisLink.Title && (
          <StyledImageCardText>
            <StyledImageCardTitle>
              {this.props.thisLink.Title}
            </StyledImageCardTitle>
          </StyledImageCardText>
        )}
      </StyledImageCard>
    );
  }
}

export default ImageCard;
