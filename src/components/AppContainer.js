import React from 'react';
import styled from 'styled-components';
import COLORS from '../constants/Colors';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import CARD_STYLES from '../constants/CardStyles';
import LinksContainer from './LinksContainer';
import SocialMediaCard from './SocialMediaCard';

const GlobalStyle = createGlobalStyle`
html {
  background: ${(props) =>
    props.theme.color.RGBA(props.theme.color.LIGHTEST, '0.1')};
}
`;

const StyledAppContainer = styled.div`
  padding: 16px;
  height: 100%;

  @media (min-width: 768px) {
    max-width: 700px;
    margin: 0 auto;
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: max-content 1fr;
  }
`;

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: {
        color: COLORS.IVORY_BLACK,
        cardStyle: CARD_STYLES.ROUND,
      },
    };
  }

  updateColor = (color) => {
    this.setState((prevState) => ({
      theme: {
        ...prevState.theme,
        color: color,
      },
    }));
  };

  updateCardStyle = (cardStyle) => {
    this.setState((prevState) => ({
      theme: {
        ...prevState.theme,
        cardStyle: cardStyle,
      },
    }));
  };

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={this.state.theme}>
          <GlobalStyle />
          <StyledAppContainer>
            <LinksContainer
              updateColor={this.updateColor}
              updateCardStyle={this.updateCardStyle}
            />
            {/* <SocialMediaCard /> */}
          </StyledAppContainer>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default AppContainer;
