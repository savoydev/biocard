import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/Colors';
import CARD_STYLES from '../../constants/CardStyles';
import SlideCard from './SlideCard';
import Button from '../Common/Button';

const PalleteColor = styled.button`
  width: 20%;
  height: 60px;
  background: ${(props) => props.color.BASE};
  display: inline-block;
  margin: 0 10px 20px 0;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
  border-radius: ${(props) => props.theme.cardStyle.BORDER_RADIUS};
`;

const CardStyleExample = styled.button`
  border-radius: ${(props) => props.cardStyle.BORDER_RADIUS};
  box-shadow: ${(props) => props.cardStyle.CARD_SHADOW};
  padding: 20px;
  border: none;
  width: 40%;
  height: 150px;
  margin-right: 20px;
  cursor: pointer;
`;

const StyledButton = styled(Button)`
  margin: 40px 0 40px 0;
`;

const getAllCardStyles = (props) => {
  let cardStyles = [];
  Object.keys(CARD_STYLES).forEach(function (key, i) {
    cardStyles.push(
      <CardStyleExample
        key={i}
        type="button"
        cardStyle={CARD_STYLES[key]}
        selected={false}
        onClick={() => {
          props.updateCardStyle(CARD_STYLES[key]);
        }}
      ></CardStyleExample>
    );
  });

  return cardStyles;
};

const getAllColors = (props) => {
  let colors = [];
  Object.keys(COLORS).forEach(function (key, i) {
    if (COLORS[key].BASE != null) {
      colors.push(
        <PalleteColor
          key={i}
          selected={false}
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

const ThemeSelectionCard = (props) => {
  const allColors = getAllColors(props);
  const allCardStyles = getAllCardStyles(props);
  return (
    <SlideCard show={props.show}>
      <SlideCard.Header>Select a theme color</SlideCard.Header>
      {allColors}
      <SlideCard.Header>Select a card style</SlideCard.Header>
      {allCardStyles}
      <SlideCard.ButtonRow>
        <StyledButton type="button" onClick={props.themeSelectionDone}>
          Finished
        </StyledButton>
        <StyledButton
          type="button"
          secondary
          onClick={props.themeSelectionDone}
        >
          Cancel
        </StyledButton>
      </SlideCard.ButtonRow>
    </SlideCard>
  );
};

export default ThemeSelectionCard;
