import React from "react";
import styled from "styled-components";
import SITES from "../constants/Social";
import socialSites from "../data/Social";

const StyledSocialIcon = styled.a`
  border-radius: 100%;
  width: 50px;
  height: 50px
  display: inline-block;
  background-image: url('${props => props.site.LOGO}');
  background-size: cover;
  background-position: center;
  margin: 0 5px;
`;

const SocialIcon = props => {
  return (
    <StyledSocialIcon site={props.site} title={props.title} href={props.link} />
  );
};

export default SocialIcon;
