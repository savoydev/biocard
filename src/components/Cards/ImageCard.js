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

const StyledCardButtonContainer = styled.div`
  font-weight: bold;
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  z-index: 3;
`;

const StyledIconButton = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.theme.color.BASE}
  border-radius: ${props => props.theme.cardStyle.BORDER_RADIUS};
  margin-bottom: 10px;
  display: block;
  pointer: cursor;
`;

export class ImageCard extends React.Component {
  editCard = () => {
    this.props.showEditLink(this.props.thisLink);
  };

  render() {
    return (
      <StyledImageCard
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
        {this.props.edit && (
          <StyledCardButtonContainer>
            <StyledIconButton
              type="button"
              showEditLink={this.props.edit ? this.editCard : null}
              onClick={this.props.edit ? this.editCard : null}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </StyledIconButton>
            <StyledIconButton type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg></StyledIconButton>
          </StyledCardButtonContainer>
        )}
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
