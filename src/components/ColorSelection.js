import React, { Component } from "react";
import styled from "styled-components";
import BasicCard from "./BasicCard";
import COLORS from "../constants/Colors";

const ColorSelectionStyled = styled(BasicCard)`
  text-align: center;
`;

const PalleteColor = styled.button`
  width: 20%;
  height: 60px;
  background: ${props => props.color.BASE};
  display: inline-block;
  margin: 0 10px 20px 10px;
  border: none;
  border-radius: ${props => props.cardStyle.BORDER_RADIUS};
`;

const ColorSelectionHeader = styled.div`
  font-family: "Heebo";
  font-size: 2rem;
  margin-bottom: 10px;
`;

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
  return (
    <ColorSelectionStyled color={props.color} cardStyle={props.cardStyle}>
      <ColorSelectionHeader color={props.color}>
        Select a theme color
      </ColorSelectionHeader>
      {allColors}
    </ColorSelectionStyled>
  );
};

export default ColorSelection;
