import React from "react";
import COLORS from "../constants/Colors";
import styled from "styled-components";
import SocialIcon from "../components/SocialIcon";
import socialSites from "../data/Social";

const StyledSocialMediaCard = styled.div`
  padding: 10px;
  text-align: center;
  margin: 30px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 50px;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  text-transform: uppercase;
  background: none;
  color: ${COLORS.SKY_BLUE}
  display: block;
  border: 1px solid ${COLORS.SKY_BLUE};
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
