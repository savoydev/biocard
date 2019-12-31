import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import BasicCard from "./BasicCard";
import COLORS from "../constants/Colors";
import { slideInUp } from "react-animations";
import CARD_STYLES from "../constants/CardStyles";

const slideInUpAnimation = keyframes`${slideInUp}`;

const ColorSelectionStyled = styled(BasicCard)`
  position: fixed;
  bottom: 0;
  margin: 0;
  left: 0;
  right: 0;
  background: #fff;
  animation: 0.5s ${slideInUpAnimation};
  z-index: 3;
  box-shadow: ${props => props.cardStyle.CARD_TOP_SHADOW};
`;

const PalleteColor = styled.button`
  width: 20%;
  height: 60px;
  background: ${props => props.color.BASE};
  display: inline-block;
  margin: 0 10px 20px 0;
  border: none;
  transition: all 0.3s;
  border-radius: ${props => props.cardStyle.BORDER_RADIUS};
`;

const ColorSelectionHeader = styled.div`
  font-family: "Heebo";
  font-size: 2rem;
  text-align: left;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: ${props => props.color.DEFAULT_GRADIENT};
  color: ${COLORS.EGGSHELL};
  font-family: "Open Sans";
  font-weight: bold;
  border: none;
  font-size: 1.25rem;
  line-height: 2.5rem;
  border-radius: ${props => props.cardStyle.BTN_BORDER_RADIUS};
  margin: 0 auto;
  display: block;
  min-width: 100px;
  padding: 10px 30px;
  margin: 20px 0;
  cursor: pointer;
  box-shadow: ${props => props.cardStyle.BTN_SHADOW};
  transition: all 0.3s;
  :hover {
    transform: scale(1.025);
    transition: all 0.3s;
    box-shadow: 0px 5px 15px rgba(130, 130, 130, 0.25);
  }
`;

const CardStyleExample = styled.button`
  border-radius: ${props => props.cardStyle.BORDER_RADIUS};
  box-shadow: ${props => props.cardStyle.CARD_SHADOW};
  padding: 20px;
  border: none;
  width: 40%;
  height: 150px;
  margin-right: 20px;
`;

const getAllCardStyles = props => {
  let cardStyles = [];
  Object.keys(CARD_STYLES).forEach(function(key, i) {
    cardStyles.push(
      <CardStyleExample
        key={i}
        type="button"
        cardStyle={CARD_STYLES[key]}
        onClick={() => {
          props.updateCardStyle(CARD_STYLES[key]);
        }}
      ></CardStyleExample>
    );
  });

  return cardStyles;
};

const getAllColors = props => {
  let colors = [];
  Object.keys(COLORS).forEach(function(key, i) {
    if (COLORS[key].BASE != null) {
      colors.push(
        <PalleteColor
          key={i}
          color={COLORS[key]}
          type="button"
          cardStyle={props.cardStyle}
          onClick={() => {
            props.updateColor(COLORS[key]);
          }}
        />
      );
    }
  });

  return colors;
};

const ColorSelection = props => {
  const allColors = getAllColors(props);
  const allCardStyles = getAllCardStyles(props);
  return (
    <ColorSelectionStyled color={props.color} cardStyle={props.cardStyle}>
      <ColorSelectionHeader color={props.color}>
        Select a theme color
      </ColorSelectionHeader>
      {allColors}
      <ColorSelectionHeader color={props.color}>
        Select a card style
      </ColorSelectionHeader>
      {allCardStyles}
      <Button
        type="button"
        color={props.color}
        cardStyle={props.cardStyle}
        onClick={props.themeSelectionDone}
      >
        Finished
      </Button>
    </ColorSelectionStyled>
  );
};

export default ColorSelection;
