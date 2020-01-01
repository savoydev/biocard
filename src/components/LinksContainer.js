import React from "react";
import UserCard from "./Cards/UserCard";
import ImageCard from "./Cards/ImageCard";
import TextCard from "./Cards/TextCard";
import VideoCard from "./Cards/VideoCard";
import CreateLinkCard from "./CreateLink";
import COLORS from "../constants/Colors";
import styled from "styled-components";
import CARD_STYLES from "../constants/CardStyles";
import ColorSelection from "./ColorSelection";

const mockLinks = require("../data/Links.json");

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
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: ${props => props.cardStyle.BTN_SHADOW};
  transition: all 0.3s;
  :hover {
    transform: scale(1.025);
    transition: all 0.3s;
    box-shadow: 0px 5px 15px rgba(130, 130, 130, 0.25);
  }
`;

class LinksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ShowColorSelection: false,
      ShowLinkCreation: false,
      Color: COLORS.IVORY_BLACK,
      CardStyle: CARD_STYLES.ROUND,
      Links: []
    };
  }

  componentDidMount() {
    this.getLinks();
  }

  async getLinks() {
    this.setState({
      Links: mockLinks
    });
  }

  getLinkType = () => {
    let link = this.props.link;

    if (link.includes("youtube")) {
      return this.getYoutubeEmbedType();
    }
  };

  getYoutubeEmbedType = link => {
    let embedString = "";
    if (link.includes("embed")) {
      embedString = link.split("/embed/").pop();
    } else if (link.includes("watch")) {
      embedString = link.split("/watch?v=").pop();
    }
    return embedString;
  };

  addLink = link => {
    this.setState({
      Links: this.state.Links.concat(link),
      ShowLinkCreation: false
    });
  };

  renderLinkTypes = () => {
    let links = this.state.Links;
    let linkComponents = [];
    if (links.length) {
      for (let i = 0; i < links.length; i++) {
        if (links[i].ImageURL.length) {
          linkComponents.push(
            <ImageCard
              image={links[i].ImageURL}
              link={links[i].Link}
              title={links[i].Title}
              description={links[i].Description}
              color={this.state.Color}
              cardStyle={this.state.CardStyle}
              key={i}
            />
          );
        } else if (links[i].Link.includes("youtube")) {
          linkComponents.push(
            <VideoCard
              title={links[i].Title}
              embedString={this.getYoutubeEmbedType(links[i].Link)}
              color={this.state.Color}
              cardStyle={this.state.CardStyle}
              key={i}
            />
          );
        } else {
          linkComponents.push(
            <TextCard
              link={links[i].Link}
              title={links[i].Title}
              description={links[i].Description}
              color={this.state.Color}
              cardStyle={this.state.CardStyle}
              key={i}
            />
          );
        }
      }
    }

    return linkComponents;
  };

  updateColor = color => {
    this.setState({
      Color: color
    });
  };

  updateCardStyle = cardStyle => {
    this.setState({
      CardStyle: cardStyle
    });
  };

  themeSelectionDone = () => {
    this.setState({
      ShowColorSelection: false
    });
  };

  showColorSelection = () => {
    this.setState(
      {
        ShowColorSelection: true
      },
      () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    );
  };

  showLinkCreation = () => {
    this.setState({
      ShowLinkCreation: true
    });
  };

  render() {
    const renderLinks = this.renderLinkTypes();
    return (
      <React.Fragment>
        <UserCard
          image="https://i1.sndcdn.com/avatars-000378232415-umh2jq-t500x500.jpg"
          name="Artist Name Here"
          description="Artist bio can go here"
          color={this.state.Color}
          cardStyle={this.state.CardStyle}
        />
        {renderLinks}
        <Button
          type="button"
          color={this.state.Color}
          onClick={this.showLinkCreation}
          cardStyle={this.state.CardStyle}
        >
          Create new link
        </Button>
        <Button
          type="button"
          color={this.state.Color}
          cardStyle={this.state.CardStyle}
          onClick={this.showColorSelection}
        >
          Change theme
        </Button>
        {this.state.ShowLinkCreation && (
          <CreateLinkCard
            color={this.state.Color}
            cardStyle={this.state.CardStyle}
            addLink={this.addLink}
          />
        )}
        {this.state.ShowColorSelection && (
          <ColorSelection
            color={this.state.Color}
            cardStyle={this.state.CardStyle}
            themeSelectionDone={this.themeSelectionDone}
            updateCardStyle={this.updateCardStyle}
            updateColor={this.updateColor}
          />
        )}
      </React.Fragment>
    );
  }
}

export default LinksContainer;
