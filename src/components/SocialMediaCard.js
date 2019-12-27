import React from "react";
import COLORS from "../constants/Colors";
import styled from "styled-components";
import SocialIcon from "../components/SocialIcon";
import socialSites from "../data/Social";

const StyledSocialMediaCard = styled.div`
  padding: 10px;
  text-align: center;
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
  return <StyledSocialMediaCard>{socials}</StyledSocialMediaCard>;
};

export default SocialMediaCard;
