import React from "react";
import COLORS from "../constants/Colors";
import styled from "styled-components";
import SocialIcon from "../components/SocialIcon";
import socialSites from "../data/Social";
import CARD_STYLES from "../constants/CardStyles";

const THEME_COLOR = COLORS.PRUSSIAN_BLUE;
const cardStyles = CARD_STYLES.ROUND;
const StyledSocialMediaCard = styled.div`
  padding: 10px;
  text-align: center;
  margin: 30px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: ${cardStyles.BTN_BORDER_RADIUS};
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  text-transform: uppercase;
  background: none;
  color: ${THEME_COLOR.BASE}
  display: block;
  border: none;
`;

const getSocialSites = () => {
  let userSocialSites = socialSites;
  let renderSocialSites = [];
  for (let i = 0; i < userSocialSites.length; i++) {
    renderSocialSites.push(
      <SocialIcon
        site={userSocialSites[i].site}
        title={userSocialSites[i].site.TITLE}
        link={userSocialSites[i].link}
        key={i}
      />
    );
  }
  return renderSocialSites;
};

const SocialMediaCard = props => {
  const socials = getSocialSites();
  return (
    <StyledSocialMediaCard>
      {socials}
      <Button type="button">Create your link bio</Button>
    </StyledSocialMediaCard>
  );
};

export default SocialMediaCard;
