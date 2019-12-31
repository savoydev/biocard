import React from "react";
import UserCard from "./UserCard";
import MediaCard from "./MediaCard";
import TextCard from "./TextCard";
import CreateLinkCard from "./CreateLink";
import COLORS from "../constants/Colors";
import styled from "styled-components";
import CARD_STYLES from "../constants/CardStyles";
import ColorSelection from "./ColorSelection";

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
      Color: COLORS.IVORY_BLACK,
      CardStyle: CARD_STYLES.FLAT,
      Links: [
        {
          ImageURL:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FBHsq0b7HxFc%2Fmaxresdefault.jpg&f=1&nofb=1",
          Link:
            "https://open.spotify.com/album/0MOImG9dhPplgcVsrOveK5?si=7hR53EyvQXGm0FXJpJJu0A",
          Title: "Mixed Feelings",
          Description: "New single"
        },
        {
          ImageURL: "",
          Link:
            "https://open.spotify.com/album/0MOImG9dhPplgcVsrOveK5?si=7hR53EyvQXGm0FXJpJJu0A",
          Title: "Mixed Feelings",
          Description: "Check out my lastest release"
        },
        {
          ImageURL: "",
          Link: "https://www.youtube.com/embed/VxWlL1Phh70",
          Title: "Mixed Feelings",
          Description: "Check out my lastest release"
        },
        {
          ImageURL: "",
          Link: "https://www.youtube.com/watch?v=0FtJMvnHjU4",
          Title: "Mixed Feelings",
          Description: "Check out my lastest release"
        }
      ]
    };
  }

  addLink = link => {
    this.setState({
      Links: this.state.Links.concat(link)
    });
  };

  renderLinkTypes = () => {
    let links = this.state.Links;
    let linkComponents = [];
    if (links.length) {
      for (let i = 0; i < links.length; i++) {
        if (links[i].ImageURL.length || links[i].Link.includes("youtube")) {
          linkComponents.push(
            <MediaCard
              image={links[i].ImageURL}
              link={links[i].Link}
              title={links[i].Title}
              description={links[i].Description}
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
      Color: color,
      ShowColorSelection: false
    });
  };

  showColorSelection = () => {
    this.setState({
      ShowColorSelection: true
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
        <CreateLinkCard
          color={this.state.Color}
          cardStyle={this.state.CardStyle}
          addLink={this.addLink}
        />
        <Button
          type="button"
          color={this.state.Color}
          cardStyle={this.state.CardStyle}
          onClick={this.showColorSelection}
        >
          Change theme
        </Button>
        {this.state.ShowColorSelection && (
          <ColorSelection
            cardStyle={this.state.CardStyle}
            updateColor={this.updateColor}
          />
        )}
      </React.Fragment>
    );
  }
}

export default LinksContainer;
